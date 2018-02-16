import "./style/reset.css";
import "./style/main.styl";
import BScroll from "better-scroll";

window.BScroll = BScroll;

// 拿到屏幕的宽度（viewport）
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

// 获取HTML的dom
let htmlDom = document.getElementsByTagName("html")[0];

htmlDom.style.fontSize = htmlWidth / 10 + "px";

window.addEventListener('resize', (e) => {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 + "px";
});

