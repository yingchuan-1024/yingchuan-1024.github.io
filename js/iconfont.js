// 文件位置：hexo/themes/你的主题/scripts/iconfont.js
'use strict';

function iconFont(args) {
  let iconName = args[0]; // 图标名称，例如 'fa fa-pen-square'
  return `<i class="${iconName}"></i>`;
}

hexo.extend.tag.register('icon', iconFont);
