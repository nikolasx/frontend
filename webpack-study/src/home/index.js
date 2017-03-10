/**
 * 加载样式
 */
import css from "../common.css"
import css from "../main.css"
require("../stylus.styl")

var app = document.getElementById("app")
app.innerHTML = '<p>hello , nicholas 123</p>';


import bgImg from "../image.js";


app.innerHTML = app.innerHTML + bgImg;