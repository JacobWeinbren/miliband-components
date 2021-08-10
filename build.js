const esbuild = require('esbuild')
const path = require("path");
const sassPlugin = require('esbuild-sass-plugin').sassPlugin;

if (watch == true) {
    var watch = {
        onRebuild(error, result) {
            if (error) console.error('Watch Build Failed:', error)
            else console.log('Watch Build Succeeded:', result)
        }
    }
} else {
    var watch = false;
}

esbuild.build({
    entryPoints: {
        'theme': 'src/styles/theme.scss',
        'index': 'src/index.ts',
        'mili-button': 'src/components/mili-button.ts',
    },
    format: 'esm',
    outdir: 'dist',
    bundle: true,
    splitting: true,
    sourcemap: 'external',
    plugins: [
        sassPlugin()
    ],
    loader: {
        '.scss': 'css',
        '.png': 'file',
        '.woff': 'file',
        '.woff2': 'file',
        '.eot': 'file',
        '.ttf': 'file',
        '.svg': 'file',
    },
    watch: watch
}).catch((e) => console.error(e.message));