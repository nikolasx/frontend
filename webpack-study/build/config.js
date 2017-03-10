/**
 * Created by lix10 on 2017/3/10.
 */
var path = require("path");
var rootPath = path.resolve(__dirname,"../dist");
const config ={
    dev:{
        outputPublicPath: "/",
        outputPath: rootPath,
        port:9090
    },

    prod:{
        outputPublicPath: rootPath,
        outputPath: rootPath
    }
};

module.exports = config;
