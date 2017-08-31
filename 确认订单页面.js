// 确认订单页面：根据需要检测用户选择或填写的收货地址是否包含身份证号码并提示填写
$(function () {
    var screenWidth=$(window).width();
    var pageUrl=location.href;
    var goodsOption=$(".goods_list_discount.shop_checkout_discount").text();
    console.log(goodsOption);
    if (goodsOption.indexOf("保税区")>=0) {

        // 添加收货地址浮层检测是否填写了身份证号码
        // var idCardNum="";
        $("body").on("mouseover",".dialog.ConfirmDialog",function () {
            // idCardNum=$(this).find("input[name=’idcard’]").val();
            // console.log(idCardNum);
        });

        $("body").on("mousedown","a.button.confirmBtn",function () {
            var idCardNum = $("body").find("input[name='idcard']").val();
            if (idCardNum == "") {
                alert("根据国家规定，购买保税区发货商品需提供身份证号码，请填写与收货人姓名相对应的身份证号码。");
                event.preventDefault();
                event.stopPropagation();
                return false;
                // $(this).parents(".dialog.ConfirmDialog").find("input[name=’idcard’]").focus();
                // $("body").append("<div class=’tipsError tips’ style=’z-index: 11033; left: 0px; top:0’><div class=’tipsPad’><i class=’xzicon-tipsError’></i>请输入身份证号码</div></div>");
            }
        });

        // 在pad竖屏以上屏幕下，用户点击选择收货地址时检测该地址是否包含身份证号码
        var screenWidth=$(window).width();
        if (screenWidth>768) {
            var idCardNum1="";
            $("body").on("mousedown",".shop_checkout_1_address.shop_checkout_address.clearfix li",function () {
                idCardNum1=$(this).find("span[role='idcard']").text();
                console.log(idCardNum1);
                if (idCardNum1=="") {
                    alert("根据国家规定，购买保税区发货商品需提供身份证号码，请更换有身份证号码的收货地址或添加新收货地址。");
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }
            });
        }

        // 点击结算按钮时检测用户最终选择的收货地址是否包含身份证号码
        $(".shop_firmOrder_1_balance[role='goCheck']").click(function () {
            // var idCardNumEnd=$("body").find("li.active span[role='idcard']").text();
            var idCardNumEnd=$(".shop_checkout_1_address.shop_checkout_address.clearfix li.active span[role='idcard']").text();
            console.log(idCardNumEnd);
            if (idCardNumEnd=="") {
                if (screenWidth>1024) {
                    alert("根据国家规定，购买保税区发货商品需提供身份证号码，请更换有身份证号码的收货地址或添加新收货地址。");
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }
                else {
                    // location.href=pageUrl+"?reload";
                    alert("根据国家规定，购买保税区发货商品需提供身份证号码，请更换有身份证号码的收货地址或添加新收货地址。");
                    event.preventDefault();
                    event.stopPropagation();
                    return false;

                }
            }
        });

    }
    else {
        $("body").append("<style>#addressForm .dlalogClassly:nth-child(5) {display:none}</style>");
    }

    //
    if (pageUrl.indexOf("?reload")>=0) {
        alert("根据国家规定，购买保税区发货商品需提供身份证号码，请更换有身份证号码的收货地址或添加新收货地址。");
    }

    // 允许身份证号码输入框输入字母
    $(window).scroll(function () {
        $("body").find("input.dialogInput.inputText[name='idcard']").attr("type","text");
        $("body").find("input.dialogInput.inputText[name='idcard']").attr("role","text");
    });
    $("body").on("focus","input.dialogInput.inputText",function () {
        $("body").find("input.dialogInput.inputText[name='idcard']").attr("type","text");
        $("body").find("input.dialogInput.inputText[name='idcard']").attr("role","text");
    });

    // 修复当未设置商品选项时显示null的问题
    $("body").mouseover(function () {
        var goodsOptionList=$(this).find(".goods_list_discount.shop_checkout_discount");
        goodsOptionList.each(function () {
            var goodsOption2=$(this).text();
            console.log(goodsOption2);
            if (goodsOption2.indexOf("null")>=0) {
                $(this).hide();
            }
        });
    });

});
