var anzhiyu_musicPlaying = false;
var anzhiyu_musicStretch = false;
var anzhiyu_musicFirst = false;
// window.localStorage.setItem('anzhiyu_music',JSON.stringify("false"));
var anzhiyu = {
    //切换音乐播放状态
    musicToggle: function () {
        if (!anzhiyu_musicFirst) {
            musicBindEvent();
            anzhiyu_musicFirst = true;
        }
        let msgPlay = '<i class="fa-solid fa-play"></i><span>播放音乐</span>'; // 此處可以更改為你想要顯示的文字
        let msgPause = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>'; // 同上，但兩處均不建議更改
        // if (localStorage.getItem('anzhiyu_music')===JSON.stringify("true")) {
        if (anzhiyu_musicPlaying) {
            document.querySelector("#nav-music").classList.remove("playing");
            // document.getElementById("menu-music-toggle").innerHTML = msgPlay;
            document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停";
            anzhiyu_musicPlaying = false;
            // localStorage.setItem('anzhiyu_music',JSON.stringify("false"));
            document.querySelector("#nav-music").classList.remove("stretch");
            anzhiyu_musicStretch = false;
        } else {
            document.querySelector("#nav-music").classList.add("playing");
            // document.getElementById("menu-music-toggle").innerHTML = msgPause;
            anzhiyu_musicPlaying = true;
            // localStorage.setItem('anzhiyu_music',JSON.stringify("true"));
            document.querySelector("#nav-music").classList.add("stretch");
            anzhiyu_musicStretch = true;
        }
        document.querySelector("#nav-music meting-js").aplayer.toggle();
    },
    // 音乐伸缩
    musicTelescopic: function () {
        if (anzhiyu_musicStretch) {
            document.querySelector("#nav-music").classList.remove("stretch");
            anzhiyu_musicStretch = false;
        } else {
            document.querySelector("#nav-music").classList.add("stretch");
            anzhiyu_musicStretch = true;
        }
    },

    //音乐上一曲
    musicSkipBack: function () {
        document.querySelector("#nav-music meting-js").aplayer.skipBack();
    },

    //音乐下一曲
    musicSkipForward: function () {
        document.querySelector("#nav-music meting-js").aplayer.skipForward();
    },

    //获取音乐中的名称
    musicGetName: function () {
        var x = $(".aplayer-title");
        var arr = [];
        for (var i = x.length - 1; i >= 0; i--) {
            arr[i] = x[i].innerText;
        }
        return arr[0];
    },

    musicGetSingName: function () {
        playerButton = document.querySelector(".aplayer-title");
        navigator.clipboard.writeText(playerButton.textContent);
    },
};
let playerButton = null;
var count = 0;
window.addEventListener("click", function(){
    playerButton = document.querySelector(".aplayer-button");
    if (playerButton==null){
        // localStorage.setItem('anzhiyu_music',JSON.stringify("true"));
        anzhiyu_musicPlaying = true;
    }else {
        if (count===0){
            playerButton.addEventListener("click", function(){
/*                if (localStorage.getItem('anzhiyu_music')===JSON.stringify("true")){
                    localStorage.setItem('anzhiyu_music',JSON.stringify("false"));
                }else {
                    localStorage.setItem('anzhiyu_music',JSON.stringify("true"));
                }*/
                if (anzhiyu_musicPlaying){
                    anzhiyu_musicPlaying = false;
                }else {
                    anzhiyu_musicPlaying = true;
                }
            });
            count=1;
        }else {
        }
    }
})

// addRightMenuClickEvent();
