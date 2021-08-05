import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default [{
    input: {
        'index': 'src/index.ts',
        'mili-button': 'src/mili-button.ts',
    },
    treeshake: production,
    preserveEntrySignatures: false,
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        production && terser()
    ],
    output: [{
        dir: "dist",
        format: "esm",
        sourcemap: true,
    }]
}]