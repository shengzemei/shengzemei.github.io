/**
 * Created by xiebin on 2018/10/10.
 */

$(function () {

    $(".banner").slide({mainCell:".bd ul",effect:"fade",autoPlay:true,trigger:"click",delayTime:800,interTime:4000});

    $(".case-slide").slide({trigger:"click"});

    $(".pro-slide").slide({trigger:"click"});

    $(".zhaopin-slide").slide({titCell:".zhaopin-tit", targetCell:".zhaopin-d",defaultIndex:0,effect:"slideDown",delayTime:300,trigger:"click"});

    $(".t-li").hover(function () {
        $(this).children(".about-nav").stop().slideDown(400);
    },function(){
        $(this).children(".about-nav").stop().slideUp(400);
    });
});

