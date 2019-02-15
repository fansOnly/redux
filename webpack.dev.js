const path = require('path');
const webpack = require('webpack');
const webpackConfigBase = require('./webpack.config.js');
const merge = require('webpack-merge');

const webpackConfigDev = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'static/js/[name].bundle.js',
        chunkFilename: 'static/js/[name].chunk.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                // include: path.join(__dirname, './src'),
                // exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'css-loader'
                },{
                    loader: 'less-loader',
                    options: {
                        // less@3.X antd 按需加载报错修复
                        javascriptEnabled: true
                    }
                }],
                // include: path.join(__dirname, './src'),
                // exclude: /node_modules/
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        host: 'localhost',
        hot: true,
        inline: true,
        compress: true,
        // open: true,
        port: 3000,
        overlay: false,
        watchContentBase: true,
        historyApiFallback: {
            // Paths with dots should still use the history fallback.
            // See https://github.com/facebook/create-react-app/issues/387.
            disableDotRule: true,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(webpackConfigBase, webpackConfigDev);