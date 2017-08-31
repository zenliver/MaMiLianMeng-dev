// 商品详情页

// 窗口滚动到选项卡位置处置顶
$(function () {
  var detailTabOffsetTop=$(".goods_detail .goods_wareDetail_title").offset().top;

  $(window).scroll(function () {
    var scrollLength=$(window).scrollTop();
    if(scrollLength>=detailTabOffsetTop) {
      $(".goods_detail .goods_wareDetail_title").addClass("detail-tab-fixed");
    }
    else {
      $(".goods_detail .goods_wareDetail_title").removeClass("detail-tab-fixed");
    }
  });
});

// 当用户选择“2罐起”等时必须购满2罐才能成功下单，当用户选择单件商品价格却购买了多件时提醒用户
$(function () {
    var pageUrl=window.location.href;
    console.log(pageUrl);
    $(".goods_detail_btn a.btn.buyBtn, .goods_detail_btn a.btn.cartBtn").click(function () {
        var selectedOption=$(".goods_detail_optionList a.selectBtn.active").text();
        var selectedNumber=$("input.goods_stockInput").val();
        var screenWidth=$(window).width();
        console.log(selectedOption);
        console.log(selectedNumber);
        if (selectedOption.indexOf("2罐")>=0 || selectedOption.indexOf("2袋")>=0 || selectedOption.indexOf("2盒")>=0 || selectedOption.indexOf("2支")>=0 || selectedOption.indexOf("2瓶")>=0 || selectedOption.indexOf("2包")>=0 || selectedOption.indexOf("2套")>=0) {
            if (selectedNumber < 2) {
                alert("亲，需购买2件或以上才能使用该优惠哦！");
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
        }
        else if (selectedOption.indexOf("1罐")>=0 || selectedOption.indexOf("1袋")>=0 || selectedOption.indexOf("1盒")>=0 || selectedOption.indexOf("1支")>=0 || selectedOption.indexOf("1瓶")>=0 || selectedOption.indexOf("1包")>=0 || selectedOption.indexOf("1套")>=0) {
            if (selectedNumber >= 2) {
                alert("亲，您购买了多件商品，为给您更多优惠请选择2件起的单价哦！");
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
        }

    });
});
