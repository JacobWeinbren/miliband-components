//SYS
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";

//CSS
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import postcssLit from "rollup-plugin-postcss-lit";
import image from "@rollup/plugin-image";

//JS
import babel from "@rollup/plugin-babel";
import esbuild from "rollup-plugin-esbuild";
import { terser } from "rollup-plugin-terser";

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
                minimize: production,
                plugins: [autoprefixer],
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
            babel({
                babelHelpers: "bundled",
                exclude: "node_modules/**",
            }),
            //Main functions
            postcss({
                plugins: [autoprefixer],
                inject: false,
                minimize: production,
            }),
            postcssLit(),
            image(),
            resolve(),
            copy({
                targets: [{ src: "src/assets", dest: "dist" }],
            }),
            esbuild(),
            production && terser(),
        ],
    },
];
