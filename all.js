$(document).ready(function () {
    $(".btn").click(function (e) { 
        e.preventDefault(); /* a連結會導致網頁重新載入，所以需要取消預設行為*/
        $(".intro").toggle();
    });
});