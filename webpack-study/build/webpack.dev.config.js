/**
 * Created by lix10 on 2017/3/10.
 * 开发环境的编译配置
 */

var config = require("./config.js");
var baseConfig = require("./webpack.base.config.js");
var merge = require("webpack-merge");
var webpack = require("webpack");
var path = require("path");

Object.keys(baseConfig.entry).forEach(function(name){
    baseConfig.entry[name] = [
        `webpack-dev-server/client?http://localhost:${config.dev.port}`,
        "webpack/hot/dev-server"
    ].concat(baseConfig.entry[name]);
});



module.exports = merge(baseConfig,{

    output:{
        publicPath : config.dev.outputPublicPath,
        path: config.dev.outputPath
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});


