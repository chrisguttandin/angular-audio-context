module.exports = {
    build: {
        cmd: 'tsc -p src/tsconfig.json && rollup -c config/rollup/bundle.js && rollup -c config/rollup/script.js'
    },
    continuous: {
        cmd: 'ng test'
    },
    lint: {
        cmd: 'tslint -c config/tslint/src.json --project src/tsconfig.json --type-check src/**/*.ts'
    },
    test: {
        cmd: 'ng test --watch false'
    }
};
