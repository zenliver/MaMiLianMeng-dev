$(function () {

    // 根域名自动重定向到www主域名
    var domainName=window.location.hostname;
    console.log(domainName);
    var urlPath=window.location.pathname;
    console.log(urlPath);
    if (domainName == "mmlm88.com") {
        window.location.href="http://www.mmlm88.com"+urlPath;
    }

    // 调整手机下全部商品分类显示顺序
    var screenWidth=$(window).width();
    if (screenWidth<768) {
        $("#el_1482225662843brpk17 .goods_category_name:contains('进口辅食')").parents("li.goods_category_list.goods_category_6_list").appendTo($("#el_1482225662843brpk17 .categoryList ul"));
        $("#el_1482225662843brpk17 .goods_category_name:contains('营养保健')").parents("li.goods_category_list.goods_category_6_list").appendTo($("#el_1482225662843brpk17 .categoryList ul"));
        $("#el_1482225662843brpk17 .goods_category_name:contains('进口美妆')").parents("li.goods_category_list.goods_category_6_list").appendTo($("#el_1482225662843brpk17 .categoryList ul"));

        // $("li.goods_category_list.goods_category_6_list:nth-child(1), li.goods_category_list.goods_category_6_list:nth-child(2), li.goods_category_list.goods_category_6_list:nth-child(3)").appendTo($("#el_1482225662843brpk17 .categoryList ul"));
    }

    // 53客服
    // $.getScript("http://tb.53kf.com/code/code/10155611/1");

});
