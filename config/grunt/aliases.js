module.exports = {
    build: [
        'clean:build',
        'copy:ts',
        'sh:build-es2015',
        'sh:build-es5',
        'sh:build-esm'
    ],
    continuous: [
        'sh:continuous'
    ],
    lint: [
        'eslint',
        'sh:lint'
    ],
    test: [
        'sh:test'
    ]
};
