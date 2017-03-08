module.exports = {
    build: {
        cmd: 'ngc -p src/tsconfig.json && rollup -c config/rollup/bundle.js && rollup -c config/rollup/script.js'
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
