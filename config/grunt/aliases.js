module.exports = {
    build: ['sh:rimraf-build', 'sh:build-es2019', 'copy:src', 'sh:rimraf-src', 'sh:build-es5'],
    continuous: ['sh:continuous'],
    lint: ['sh:lint-config', 'sh:lint-src', 'sh:lint-test'],
    test: ['sh:test']
};
