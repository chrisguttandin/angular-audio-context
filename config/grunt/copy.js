module.exports = {
    src: {
        files: [
            {
                cwd: 'build/es2019/src',
                dest: 'build/es2019/',
                expand: true,
                src: [ '*.js', '*.map', '*.ts' ]
            }
        ]
    }
};
