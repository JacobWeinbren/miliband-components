import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy';
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default [{
    input: {
        'index': 'src/index.ts',
        'components/mili-button': 'src/components/mili-button.ts',
    },
    treeshake: production,
    preserveEntrySignatures: false,
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        scss({
            output: "dist/styles/theme.css"
        }),
        copy({
            targets: [{
                src: 'src/assets',
                dest: 'dist'
            }]
        }),
        production && terser()
    ],
    output: [{
        dir: "dist",
        format: "esm",
        sourcemap: true,
    }]
}]