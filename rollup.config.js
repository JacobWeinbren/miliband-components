import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import copy from "rollup-plugin-copy";
import babel from "@rollup/plugin-babel";
import esbuild from "rollup-plugin-esbuild";
import postcssLit from "rollup-plugin-postcss-lit";
import image from "@rollup/plugin-image";

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
            "components/mili-nav": "src/components/mili-nav.ts",
            "components/mili-nav-item": "src/components/mili-nav-item.ts",
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
            postcss({
                minimize: true,
                plugins: [autoprefixer()],
                inject: false,
            }),
            postcssLit(),
            image(),
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
