/**
 * Created by Administrator on 2017/3/10 0010.
 * 生产环境的配置options
 */
var config = require("./config");
var merge = require("webpack-merge");
var baseConfig = require("./webpack.base.config.js")

module.exports = merge(baseConfig,{

    output:{
        path:config.prod.outputPath
    }

});


