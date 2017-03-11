module.exports = {
    build: {
        cmd: 'tsc -p src/tsconfig.json && rollup -c config/rollup/bundle.js'
        // @todo Generating the script with 'rollup -c config/rollup/script.js' doesn't work right now.
    },
    continuous: {
        cmd: 'ng test'
    },
    lint: {
        cmd: 'ng lint'
    },
    test: {
        cmd: 'ng test --watch false'
    }
};
