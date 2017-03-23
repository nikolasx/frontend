/**
 * Created by lix10 on 2017/3/10.
 */
var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    name:'common'
});

function resolve(relPath) {
    return path.resolve(__dirname, relPath)
};

module.exports = {

    entry: {
        common:['vue'],
        login: resolve("../src/login/index.js"),
        msg: resolve("../src/msg/main.js")
    },

    output: {
        filename: "js/[name].js"
    },

    module: {
        rules: [
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
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
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
            },
            //vue文件
            {
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader"
                }]
            },
            {
                test: /\.html$/ig,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: false
                    }
                }]
            }
        ]
    },
    plugins: [
        commonsPlugin,
        new ExtractTextPlugin({
            filename: "css/[name].css"
        }),
        new HtmlWebpackPlugin({
            template: resolve("../index.tpl.html"),
            filename: "login.html",
            title: "登录",
            chunks: ['common','login']
        }),
        new HtmlWebpackPlugin({
            template: resolve("../index.tpl.html"),
            filename: "msg.html",
            title: "消息",
            chunks: ['common','msg']
        })
    ]
};

