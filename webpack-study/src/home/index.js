/**
 * 加载样式文件
 */
import css from "../style/common.css";
require("../style/main.css");
require("../style/stylus.styl");

var app = document.getElementById("app")
app.innerHTML = '<p>hello , nicholas 123</p>';

/**
 * js加载图片
 */
import bgImg from "../image.js";
//app.innerHTML = app.innerHTML + bgImg;

/**
 * 通过npm包管理器加载jquery
 * @type {*|exports|module.exports}
 */
const $ = require("jquery");
$("#app").html(app.innerHTML + bgImg);

import message from "../message.js"

/**
 * 加载第三方非包管理器的js库，也不支持AMD,CMD
 */
import ordinary from "../js/ordinary.js"
console.log(ordinary.ordinary.a)
