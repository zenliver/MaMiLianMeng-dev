// 添加返回上级链接
$(function () {
    var url=window.location.href;
    if (url.indexOf("/p-107.html")<0) {
        $(".goods_screen_1_row .right li:first-child").after("<li><a href='javascript:history.go(-1)' class='selected'>返回</a></li>");
    }
});
