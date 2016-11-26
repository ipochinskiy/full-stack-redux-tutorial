const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/index.js',
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'react' ],
                },
            },
        ]
    },
    resolve: {
        extensions: [ '', '.js', '.jsx' ],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};
