function switchNightMode() {
    document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"><div id="sun"></div><div id="moon"></div></div></div>'),
        setTimeout(function () {
            const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
            if (nowMode === 'light') {
                // 切换到夜间模式
                document.documentElement.setAttribute('data-theme', 'dark')
                document.querySelector('body').classList.add('DarkMode')
                localStorage.setItem('isDark', '1')
                localStorage.setItem('theme', 'dark')
                document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')
                
                // 先设置太阳月亮透明度
                document.getElementById("sun").style.opacity = "1";
                document.getElementById("moon").style.opacity = "0";
                setTimeout(function () {
                    document.getElementById("sun").style.opacity = "0";
                    document.getElementById("moon").style.opacity = "1";
                }, 1000);
                
                // 延时弹窗提醒
                setTimeout(() => {
                    new Vue({
                        data: function () {
                            this.$notify({
                                title: "关灯啦🌙",
                                message: "当前已成功切换至夜间模式！",
                                position: 'top-left',
                                offset: 50,
                                showClose: true,
                                type: "success",
                                duration: 5000
                            });
                        }
                    })
                }, 2000)
            } else {
                // 切换到白天模式
                document.documentElement.setAttribute('data-theme', 'light')
                document.querySelector('body').classList.remove('DarkMode')
                localStorage.setItem('isDark', '0')
                localStorage.setItem('theme', 'light')
                document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')
                
                // 先设置太阳月亮透明度
                document.getElementById("sun").style.opacity = "0";
                document.getElementById("moon").style.opacity = "1";
                setTimeout(function () {
                    document.getElementById("sun").style.opacity = "1";
                    document.getElementById("moon").style.opacity = "0";
                }, 1000);
                
                // 延时弹窗提醒
                setTimeout(() => {
                    new Vue({
                        data: function () {
                            this.$notify({
                                title: "开灯啦🌞",
                                message: "当前已成功切换至白天模式！",
                                position: 'top-left',
                                offset: 50,
                                showClose: true,
                                type: "success",
                                duration: 5000
                            });
                        }
                    })
                }, 2000)
            }
            
            // 处理动画结束
            setTimeout(function () {
                document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
                document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
                setTimeout(function () {
                    document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
                }, 1e3);
            }, 2e3)
        })
    
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
}