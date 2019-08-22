module.exports = (grunt) => {
    const fix = (grunt.option('fix') === true);

    return {
        'build-es2018': {
            cmd: 'ngc -p src/tsconfig.json'
        },
        'build-es5': {
            cmd: 'rollup -c config/rollup/bundle.js'
        },
        'continuous': {
            cmd: 'ng test'
        },
        'lint-config': {
            cmd: `eslint --config config/eslint/config.json ${ (fix) ? '--fix ' : '' }--report-unused-disable-directives *.js config/**/*.js`
        },
        'lint-src': {
            cmd: 'ng lint angular-audio-context --type-check'
        },
        'lint-test': {
            cmd: 'ng lint angular-audio-context --configuration test'
        },
        'test': {
            cmd: 'ng test --watch false'
        }
    };
};
