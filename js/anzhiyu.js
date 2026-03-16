// 延迟初始化，确保 DOM 已加载
var navMusicEl = null;
var anzhiyu_musicFirst = false;
var anzhiyu_musicPlaying = false;

// 初始化函数
function initAnzhiyu() {
  navMusicEl = document.getElementById("nav-music");
}

// 当 DOM 加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnzhiyu);
} else {
  initAnzhiyu();
}

var anzhiyu = {
  //切换音乐播放状态
  musicToggle: function (changePaly = true) {
    if (!navMusicEl) {
      console.warn('音乐播放器元素不存在');
      return;
    }
    
    if (!anzhiyu_musicFirst) {
      if (typeof musicBindEvent === 'function') {
        musicBindEvent();
      }
      anzhiyu_musicFirst = true;
    }
    let msgPlay = '<i class="fa-solid fa-play"></i><span>播放音乐</span>'; // 此處可以更改為你想要顯示的文字
    let msgPause = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>'; // 同上，但兩處均不建議更改
    if (anzhiyu_musicPlaying) {
      navMusicEl.classList.remove("playing");
      // 修改右键菜单文案为播放
      // document.getElementById("menu-music-toggle").innerHTML = msgPlay;
      const hoverTips = document.getElementById("nav-music-hoverTips");
      if (hoverTips) {
        hoverTips.innerHTML = "音乐已暂停";
      }
      // document.querySelector("#consoleMusic").classList.remove("on");
      anzhiyu_musicPlaying = false;
      navMusicEl.classList.remove("stretch");
    } else {
      navMusicEl.classList.add("playing");
      // 修改右键菜单文案为暂停
      // document.getElementById("menu-music-toggle").innerHTML = msgPause;
      // document.querySelector("#consoleMusic").classList.add("on");
      anzhiyu_musicPlaying = true;
      navMusicEl.classList.add("stretch");
    }
    if (changePaly) {
      const metingJs = document.querySelector("#nav-music meting-js");
      if (metingJs && metingJs.aplayer) {
        metingJs.aplayer.toggle();
      }
    }
  },
  // 音乐伸缩
  musicTelescopic: function () {
    if (!navMusicEl) {
      console.warn('音乐播放器元素不存在');
      return;
    }
    
    if (navMusicEl.classList.contains("stretch")) {
      navMusicEl.classList.remove("stretch");
    } else {
      navMusicEl.classList.add("stretch");
    }
  },

  //音乐上一曲
  musicSkipBack: function () {
    if (!navMusicEl) {
      console.warn('音乐播放器元素不存在');
      return;
    }
    const metingJs = document.querySelector("#nav-music meting-js");
    if (metingJs && metingJs.aplayer) {
      metingJs.aplayer.skipBack();
    }
  },

  //音乐下一曲
  musicSkipForward: function () {
    if (!navMusicEl) {
      console.warn('音乐播放器元素不存在');
      return;
    }
    const metingJs = document.querySelector("#nav-music meting-js");
    if (metingJs && metingJs.aplayer) {
      metingJs.aplayer.skipForward();
    }
  },

  //获取音乐中的名称
  musicGetName: function () {
    var x = $(".aplayer-title");
    if (!x || x.length === 0) {
      return "";
    }
    var arr = [];
    for (var i = x.length - 1; i >= 0; i--) {
      arr[i] = x[i].innerText;
    }
    return arr[0];
  },
};

// 安全地添加事件监听
if (navMusicEl) {
  navMusicEl.addEventListener('click', function(event) {
    // 判断是否是音乐
    const metingJs = document.querySelector("#nav-music meting-js");
    if (metingJs && metingJs.contains(event.target)) {
      // 是音乐元素，执行相应操作
    }
  });
}

// 如果有右键事件 可以在这里写。
// addRightMenuClickEvent();