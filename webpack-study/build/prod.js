/**
 * Created by Administrator on 2017/3/10 0010.
 */
var webpack = require("webpack");
var prodWebpackConfig = require('./webpack.prod.config.js');
webpack(prodWebpackConfig, function(err, stats) {
    process.stdout.write(stats.toString());
});