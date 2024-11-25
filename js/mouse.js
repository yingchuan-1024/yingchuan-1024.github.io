import { setANICursor } from 'ani-cursor.js';
import { setANICursorWithGroupElement } from "ani-cursor.js";
 document.addEventListener('DOMContentLoaded', function() {
      // 为<body>设置动画鼠标指针
      setANICursor("body", "/img/银狼/arrow.ani", "auto",width = 32,height = 32);

      // 为<img>设置动画鼠标指针
      setANICursor("img", "/img/银狼/link.ani", "auto",width = 32,height = 32);

      // 为<p>设置动画鼠标指针
      let textAbleGroup = [
  "input",
  'input[type="text"]',
  "textarea",
  "span",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
];
setANICursorWithGroupElement(textAbleGroup, "/img/银狼/beam.ani","auto",width = 32,height = 32);