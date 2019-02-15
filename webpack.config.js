const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        './src/main.js',
        'lodash'
    ],
    resolve:{
        extensions: ['.js','.css','.json'],
        alias: {} //配置别名可以加快webpack查找模块的速度
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000, //是把小于500B的文件打成Base64的格式，写入JS
                        name: 'static/media/[name].[hash:8].[ext]',
                        // outputPath: 'images/'  // 打包后的图片放到images文件夹下
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            title: 'react-web',
            chunksSortMode: 'none', //如果使用webpack4将该配置项设置为'none'
            hash: true,  //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template: './build/index.html'   //是要打包的html模版路径和文件名称。
        }),
    ]
}