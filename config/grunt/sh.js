module.exports = () => {
    return {
        'build-es2019': {
            cmd: 'ngc -p src/tsconfig.json'
        },
        'build-es5': {
            cmd: 'rollup --config config/rollup/bundle.mjs'
        },
        'continuous': {
            cmd: 'npx ng test'
        },
        'rimraf-build': {
            cmd: 'rimraf build/*'
        },
        'rimraf-src': {
            cmd: 'rimraf build/es2019/src'
        },
        'test': {
            cmd: 'npx ng test --watch false'
        }
    };
};
