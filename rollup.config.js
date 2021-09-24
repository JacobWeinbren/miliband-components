import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import copy from "rollup-plugin-copy";
import babel from "@rollup/plugin-babel";
import esbuild from "rollup-plugin-esbuild";

const production = !process.env.ROLLUP_WATCH;

function model_css(input, output) {
    return {
        input: input,
        output: {
            file: output,
            format: "es",
        },
        plugins: [
            postcss({
                modules: false,
                extract: true,
                minimize: true,
                plugins: [autoprefixer()],
            }),
        ],
        onwarn(warning, warn) {
            if (warning.code === "FILE_NAME_CONFLICT") return;
            warn(warning);
        },
    };
}

export default [
    model_css("src/styles/docs.scss", "dist/styles/docs.css"),
    model_css("src/styles/theme.scss", "dist/styles/theme.css"),
    {
        input: {
            index: "src/index.ts",
            "components/mili-button": "src/components/mili-button.ts",
        },
        output: {
            dir: "dist",
            format: "esm",
            sourcemap: true,
        },
        plugins: [
            //Backwards compatibility
            commonjs(),
            babel({
                babelHelpers: "bundled",
                babelrc: false,
                exclude: "node_modules/**",
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: {
                                browsers: ["> 1%", "last 2 versions"],
                            },
                            useBuiltIns: "usage",
                            corejs: 3.8,
                        },
                    ],
                ],
                plugins: [
                    "@babel/plugin-syntax-dynamic-import",
                    [
                        "@babel/plugin-transform-runtime",
                        {
                            useESModules: true,
                        },
                    ],
                ],
            }),
            //Main functions
            resolve(),
            copy({
                targets: [{ src: "src/assets", dest: "dist" }],
            }),
            esbuild({
                minify: production === true,
            }),
        ],
    },
];
