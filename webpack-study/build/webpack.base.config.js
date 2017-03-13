/**
 * Created by lix10 on 2017/3/10.
 */

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function resolve(relPath) {
    return path.resolve(__dirname, relPath)
};
module.exports = {

    entry: {
        home: [resolve("../src/home/index.js")]
    },

    output: {
        filename: "js/[name].js"
    },

    module: {
        rules: [
            //不支持包管理和AMD,CMD的js文件
            {
                test: resolve("../src/js/ordinary.js"),
                use: [{
                    loader: "exports-loader",
                    options: {
                        ordinary: "ordinaryObject"
                    }
                }]
            },
            //es6 语法转译
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ['es2015']
                    }
                }]
            },
            //图片文件的打包
            {
                test: /\.jpg|jpeg|png|gif$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: "img/[hash:32].[ext]"
                    }
                }]
            },
            //样式文件
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "stylus-loader"]
                })
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/[name].css"
        })
    ]
};

