module.exports = {
    build: [
        'clean:build',
        'sh:build-es2018',
        'sh:build-es5'
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
