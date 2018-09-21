<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '[提示]大污师发来一条消息 ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 内容不健康，已丢弃~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });