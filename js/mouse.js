import { setANICursor } from "ani-cursor.js";
import { setANICursorWithGroupElement } from "ani-cursor.js";

// 为<body>设置动画鼠标指针
setANICursor("body", "/img/ani/凯尔希指针/normal.ani", "auto", 50, 50);

// 为<img>设置动画鼠标指针
setANICursor("img", "/img/ani/凯尔希指针/cross.ani", "auto", 40, 40);

//为触控设置动画鼠标指针
let clickAbleGroup = [
    "button",
	"a",
	"span",
];
setANICursorWithGroupElement(clickAbleGroup, "/img/ani/凯尔希指针/link.ani", "auto", 40, 40);

// 为<p>设置动画鼠标指针
let textAbleGroup = [
    "input",
    'input[type="text"]',
    "textarea",
    "p",
	"i",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
];
setANICursorWithGroupElement(textAbleGroup, "/img/ani/凯尔希指针/text.ani",);