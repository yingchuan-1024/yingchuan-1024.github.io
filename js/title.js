    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = 'இωஇ 补药离开我~ ' + OriginTitile;
            clearTimeout(titleTime);
        }
        else {
            document.title = '(≧ω≦)/ 耶，肥来了~ ' + OriginTitile;
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            }, 2000);
        }
    });
