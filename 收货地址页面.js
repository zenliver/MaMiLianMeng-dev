// 收货地址页面：如果用户未填写身份证号码就无法提交
$(function () {

    // $.getScript("http://cdn.bootcss.com/jquery-mobile/1.4.5/jquery.mobile.min.js");

    var idCardNum="";
    var phoneNum="";
    var screenWidth=$(window).width();
    var pageUrl=window.location.href;

    $("body").on("mouseover",".dialog.ConfirmDialog",function () {
        idCardNum=$(this).find("input[name='idcard']").val();
        phoneNum=$(this).find("input[name='mobile']").val();
        console.log(idCardNum);
        console.log(phoneNum);
        console.log(phoneNum.length);
    });

    $("body").on("mousedown",".dialog.ConfirmDialog .button.confirmBtn",function () {
        if (idCardNum=="") {
            if (screenWidth>1024) {
                alert("根据国家规定，购买保税区发货商品需提供身份证号码，请填写与收货人姓名相对应的身份证号码。");
                return false;
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                // window.location.href=pageUrl;
                alert("根据国家规定，购买保税区发货商品需提供身份证号码，请填写与收货人姓名相对应的身份证号码。");
                // $("body").on("ajaxStart","#addressForm",function () {
                //     return false;
                //     event.preventDefault();
                //     event.stopPropagation();
                // });
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
        }
        else if (isNaN(idCardNum)) {
            // alert("请输入正确的身份证号码。");
        }
        else {
            if (phoneNum.length<11) {
                // alert("请输入正确的手机号码。");
            }
        }
    });

    // 允许身份证号码输入框输入字母
    $(window).scroll(function () {
        $("body").find("input.dialogInput.inputText[name='idcard']").attr("type","text");
        $("body").find("input.dialogInput.inputText[name='idcard']").attr("role","text");
    });
    $("body").on("focus","input.dialogInput.inputText",function () {
        $("body").find("input.dialogInput.inputText[name='idcard']").attr("type","text");
        $("body").find("input.dialogInput.inputText[name='idcard']").attr("role","text");
    });

});
