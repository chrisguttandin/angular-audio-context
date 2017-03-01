import babel from 'rollup-plugin-babel';

export default {
    dest: 'build/es5/bundle.js',
    entry: 'build/esm/module.js',
    format: 'umd',
    moduleName: 'angularAudioContext',
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: [
                [
                    'es2015',
                    {
                        modules: false
                    }
                ]
            ]
        })
    ]
};
