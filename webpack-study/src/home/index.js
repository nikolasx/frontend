/**
 * 加载样式文件
 */
import css from "../style/common.css";
import css from "../style/main.css";
require("../style/stylus.styl");

var app = document.getElementById("app")
app.innerHTML = '<p>hello , nicholas 123</p>';


import bgImg from "../image.js";


app.innerHTML = app.innerHTML + bgImg;