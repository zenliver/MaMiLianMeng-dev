$(function () {

    function ajaxLoadModify() {

        $.ajax({
            url: "/rpc/index/?phprpc_id=js1620806411400&",
            type: "POST",
            success: function () {
                // var statusText = $("body").find(".shop_myOrder_1_itemHead .status").text();
                // alert(statusText);
                // alert("ajax请求完成！");
                $("body").find(".shop_myOrder_1_itemHead .status").each(function () {
                    var statusText = $(this).text();
                    if (statusText.indexOf("待发货") >= 0) {
                        $(this).html("海关清关中");
                    }
                });
            }
        });

        // 用普通的方法效果取决于用户的网速，效果不稳定，不可取
        // $("body").find(".shop_myOrder_1_itemHead .status").each(function () {
        //     var statusText = $(this).text();
        //     if (statusText.indexOf("待发货") >= 0) {
        //         $(this).html("海关清关中");
        //     }
        // });

    }

    setTimeout(ajaxLoadModify,100);

    $(".shop_myOrder_tab a:nth-child(1), .shop_myOrder_tab a:nth-child(3)").click(function () {
        // ajaxLoadModify();
        setTimeout(ajaxLoadModify,100);
    });

});
