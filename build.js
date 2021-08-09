esbuild = require('esbuild')
path = require("path");
sassPlugin = require("esbuild-sass-plugin").sassPlugin;

esbuild.build({
    entryPoints: {
        'index': 'src/index.ts',
        'mili-button': 'src/mili-button.ts',
    },
    format: 'esm',
    outdir: 'dist',
    bundle: true,
    splitting: true,
    sourcemap: 'external',
    plugins: [
        sassPlugin()
    ],
}).catch((e) => console.error(e.message));