module.exports = {
    build: [
        'clean:build',
        'sh:build',
        'uglify'
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
