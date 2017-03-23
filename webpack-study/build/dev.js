
var config = require("./config");
var webpack = require("webpack");
var devConfig = require("./webpack.dev.config.js");
var WebpackDevServer = require("webpack-dev-server");
var compiler = webpack(devConfig);

var server = new WebpackDevServer(compiler,{
    hot: true,
    publicPath:devConfig.output.publicPath
});

server.listen(config.dev.port,"localhost");
