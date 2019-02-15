const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const glob = require('glob-all');
// const PurifyCSSPlugin = require('purifycss-webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const safePostCssParser = require('postcss-safe-parser');
const webpackConfigBase = require('./webpack.config.js');
const merge = require('webpack-merge');

// const publicPath = './';

const webpackConfigProd = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        // publicPath: publicPath
    },
    // devtool: 'source-map',
    optimization: {
        // minimize: true, // true 为开启压缩，为了缩短打包时间，一般在开发环境不开启，
        concatenateModules: true,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            // name: false,
            // cacheGroups: {
            //     // styles: {
            //     //     // name: 'styles',
            //     //     test: /\.css$/,
            //     //     chunks: 'all',
            //     //     enforce: true,
            //     // },
            //     // commons: {
            //     //     test: /\.js$/,
            //     //     // name: "commons",
            //     //     chunks: "all", 
            //     //     minChunks: 1,
            //     //     priority: 0 
            //     // },
            //     vendor: {
            //         test: /[\\/]node_modules[\\/]/,
            //         name: 'vendors',
            //         chunks: 'all'
            //     }
            // }
        }
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                parser: safePostCssParser,
                map: {
                    inline: false,
                    annotation: true,
                }
            }
        }),
        new CleanWebpackPlugin(['./dist'], {
            root: path.resolve(__dirname),
            verbose: true,
            dry: false
        }),
        // new PurifyCSSPlugin({
        //     // Give paths to parse for rules. These should be absolute!
        //     paths: glob.sync([
        //         path.join(__dirname, './build/*.html'),
        //         path.join(__dirname, './src/*.js')
        //     ])
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // vendor hash 保持一致
        new webpack.HashedModuleIdsPlugin(),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            // publicPath: publicPath,
        })
    ]
}

module.exports = merge(webpackConfigBase, webpackConfigProd);