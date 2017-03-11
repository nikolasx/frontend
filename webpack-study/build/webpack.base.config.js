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
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }]
            },
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
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            },
            {
                test: /\.styl$/,
                //use: ['style-loader', 'css-loader', 'stylus-loader']
                use: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer!stylus')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/[name].css"
        })
    ]
};

