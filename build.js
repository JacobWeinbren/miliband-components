esbuild = require('esbuild')
path = require("path");
sassPlugin = require("esbuild-sass-plugin").sassPlugin;

if (process.env.DEBUG == true) {
    var watch = {
        onRebuild(error, result) {
            if (error) console.error('Watch Build Failed:', error)
            else console.log('Watch Build Succeeded:', result)
        },
    }
} else {
    var watch = false;
}

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
    watch: watch
}).catch((e) => console.error(e.message));