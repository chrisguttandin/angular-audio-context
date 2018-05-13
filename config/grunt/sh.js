module.exports = {
    'build-es2015': {
        cmd: 'ngc -p src/tsconfig.json'
    },
    'build-es5': {
        cmd: 'rollup -c config/rollup/bundle.js'
    },
    'build-esm': {
        cmd: 'ngc -p src/tsconfig.esm.json'
    },
    'continuous': {
        cmd: 'ng test'
    },
    'lint': {
        cmd: 'ng lint angular-audio-context --type-check && ng lint angular-audio-context-unit --type-check'
    },
    'test': {
        cmd: 'ng test --watch false'
    }
};
