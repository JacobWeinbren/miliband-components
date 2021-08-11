import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default [
    {
        input: {
            index: "src/index.ts",
            "components/mili-button": "src/components/mili-button.ts",
        },
        treeshake: production,
        preserveEntrySignatures: false,
        plugins: [
            typescript(),
            resolve(),
            commonjs(),
            postcss({
                use: ["sass"],
            }),
            copy({
                targets: [
                    {
                        src: "src/assets",
                        dest: "dist",
                    },
                ],
            }),
            production && terser(),
        ],
        output: [
            {
                dir: "dist",
                format: "esm",
                sourcemap: true,
            },
        ],
    },
];
