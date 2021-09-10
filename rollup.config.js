import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sass from "rollup-plugin-sass";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import copy from "rollup-plugin-copy";
import babel from "@rollup/plugin-babel";
import esbuild from "rollup-plugin-esbuild";

const production = !process.env.ROLLUP_WATCH;

export default {
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
            ...{
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            useBuiltIns: "entry",
                            corejs: "3.8",
                        },
                    ],
                ],
            },
        }),
        //Main functions
        resolve(),
        sass({
            output: "dist/styles/theme.css",
            processor: (css) =>
                postcss([autoprefixer()])
                    .process(css, { from: undefined })
                    .then((result) => result.css),
        }),
        copy({
            targets: [{ src: "src/assets", dest: "dist" }],
        }),
        esbuild({
            minify: production === true,
        }),
    ],
};
