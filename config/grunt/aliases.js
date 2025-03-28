module.exports = {
    build: ['sh:rimraf-build', 'sh:build-es2019', 'copy:src', 'sh:rimraf-src', 'sh:build-es5']
};
