/**
 * Created by lix10 on 2017/3/10.
 */
var path = require("path");
var rootPath = path.resolve(__dirname,"../dist");
const config ={
    dev:{
        outputPublicPath: "/dist/",
        outputPath: rootPath,
        port:9090
    },

    prod:{
        outputPath: rootPath
    }
};

module.exports = config;
