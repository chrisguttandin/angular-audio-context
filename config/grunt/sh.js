module.exports = {
    'build-es2018': {
        cmd: 'ngc -p src/tsconfig.json'
    },
    'build-es5': {
        cmd: 'rollup -c config/rollup/bundle.js'
    },
    'continuous': {
        cmd: 'ng test'
    },
    'lint': {
        cmd: 'ng lint angular-audio-context --type-check && ng lint angular-audio-context --configuration test'
    },
    'test': {
        cmd: 'ng test --watch false'
    }
};
