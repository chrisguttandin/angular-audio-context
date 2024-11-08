module.exports = (grunt) => {
    const fix = grunt.option('fix') === true;

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
        'lint-config': {
            cmd: `eslint --config config/eslint/config.json --ext .js ${fix ? '--fix ' : ''}--report-unused-disable-directives *.js config/`
        },
        'lint-src': {
            cmd: 'npx ng lint angular-audio-context'
        },
        'lint-test': {
            cmd: 'npx ng lint angular-audio-context --configuration test'
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
