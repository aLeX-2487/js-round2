/**
 * Created by aLeX on 2017/5/27.
 */
var abc = JSON.parse(sessionStorage.arr_2);
var user = JSON.parse(sessionStorage.user);
var num = abc.length;
var pp=1;
$(document).ready(function() {

    if(user.step%2==1&&user.step!=1&&location.search.indexOf("?")!=0){
        user.die.push(user.die_num[user.die_num.length-1]);
        sessionStorage.setItem('user',JSON.stringify(user));}
    //改变每天的文字
    var arr_day=new Array("一","二","三","四","五","六","七","八","九");  //汉字第几天合集
    for(a=0;a<Math.floor(user.step/4);a++){
        $("main").append($(".day:first").clone());  //复制追加每天内容及事件
        $("h1").eq(a+1).text("第"+arr_day[a+1] +"天"); }//第几天标记

    for(d=0;d<$(".day").length-1;d++){
        $(".p1").eq(d).click(function(){alert("请按顺序游戏！")});
        $(".p2").eq(d).click(function(){alert("请按顺序游戏！")});
        $(".p3").eq(d).click(function(){alert("请按顺序游戏！")});
        $(".p4").eq(d).click(function(){alert("请按顺序游戏！")});
    }



    switch (user.step%4) {
        case 1:
            //除了当天，之前颜色全变灰
            $("p").css("background-color","gainsboro");
            $(".p1").eq($(".p1").length-1).css("background-color","#24a7c6");
            $(".p2").eq($(".p2").length-1).css("background-color","#24a7c6");
            $(".p3").eq($(".p3").length-1).css("background-color","#24a7c6");
            $(".p4").eq($(".p4").length-1).css("background-color","#24a7c6");
            $(".triangle_border").css("border-color","transparent gainsboro transparent");
            $(".tb1").eq($(".tb1").length-1).css("border-color","transparent  #24a7c6 transparent");
            $(".tb2").eq($(".tb2").length-1).css("border-color","transparent  #24a7c6 transparent");
            $(".tb3").eq($(".tb3").length-1).css("border-color","transparent  #24a7c6 transparent");
            $(".tb4").eq($(".tb4").length-1).css("border-color","transparent  #24a7c6 transparent");
            //除杀人按钮外，其余全部提示
            $(".p2:last,.p3:last,.p4:last").click(function(){alert("请按顺序游戏！")});
            //最近一个杀人按钮跳转链接
            $(".p1:last").click(function(){
                user.step++;
                sessionStorage.setItem('user',JSON.stringify(user));
                location.href="./js-round2.5.html";})

            for(a=0;a<Math.floor(user.step/4);a++){
                //被杀提示框
                $(".main-1-1").hide();
                $(".main-1-1").eq(a+1).show();  //仅保留当天显示，其他隐藏
                $(".vote").eq(a).text((user.die[2*a+1])+1+"号被投死，他的真实身份是"+abc[(user.die[2*a+1])]); //投票提示信息
                $(".mess").eq(a).text(user.die[2*a]+1+"号被杀死，他的真实身份是"+abc[(user.die[2*a])]);
                $(".mess").eq(a).show(); //投票提示框显示
                $(".vote").eq(a).show();} //投票提示框显示
            $(".triangle_border:lt(a+1)").css("border-color","transparent gainsboro transparent transparent");

            break;
        case 3:


            ////除了当天，之前颜色全变灰
            $("p").css("background-color","gainsboro");
            $(".p2").eq($(".p2").length-1).css("background-color","#24a7c6");
            $(".p3").eq($(".p3").length-1).css("background-color","#24a7c6");
            $(".p4").eq($(".p4").length-1).css("background-color","#24a7c6");
            $(".triangle_border").css("border-color","transparent gainsboro  transparent");
            $(".tb2").eq($(".tb2").length-1).css("border-color","transparent  #24a7c6 transparent ");
            $(".tb3").eq($(".tb3").length-1).css("border-color","transparent  #24a7c6 transparent ");
            $(".tb4").eq($(".tb4").length-1).css("border-color","transparent  #24a7c6 transparent  ");
            //输出提示信息

            $(".mess").show();
            $("a").eq(3+(Math.floor(user.step/4))*5).click(function () {return false;})

            //被杀和被投死提示框
            for(b=0;b<Math.ceil(user.step/4);b++){
                $(".main-1-1").hide();
                $(".main-1-1").eq(b).show();
                $(".mess").eq(b).show();
                $(".vote").eq(b).show();
                $(".vote:last").hide();
                $(".vote").eq(b).text((user.die[2*b+1])+1+"号被投死，他的真实身份是"+abc[user.die_num[user.die_num.length-1]]); //投票提示信息
                $(".mess").eq(b).text(user.die[2*b]+1+"号被杀死，他的真实身份是"+abc[user.die_num[user.die_num.length-1]])
            }





            //中间发言事件

            //杀人按钮一直提示
            $(".p1 a:last").click(function(){ alert("请按顺序游戏！");});
            //死者发言提示，并将变量pp赋值
            $(".p2:last").click(function(){if(pp==1){alert("留下遗言吧！")
                $(".p2").eq($(".p2").index(this)).css("background-color","gainsboro");$(".tb2").eq($(".tb2").index(this)).css("border-color","transparent gainsboro transparent transparent");
                pp=2;}else {alert("请按顺序游戏！")};})
            //幸存者发言按钮，根据pp数值判定2种提示
            $(".p3:last").click(function(){
                if(pp==2){alert("幸存者请发表获奖感言！");$("p").eq($("p").index(this)).css("background-color","gainsboro");$(".tb3:last").css("border-color","transparent gainsboro transparent transparent");pp=3}
                else {alert("请按顺序游戏！");}})
            //投票按钮，根据pp数值判定2种提示
            $(".p4:last").click(function(){
                if(pp==3){$("p").eq($("p").index(this)).css("background-color","gainsboro");$(".tb4:last").css("border-color","transparent gainsboro transparent ");
                    user.step++;
                    sessionStorage.setItem('user',JSON.stringify(user));
                    location.href="./js-round2.5.html";}else {
                    alert("请按顺序游戏！");
                } })


            break;
    }
    //展开缩进按钮
    $(".main-1>.aa").click(function(){if( $(".main-1-1").eq( $(".aa").index(this)).is(":hidden")){$(".main-1-1").eq( $(".aa").index(this)).show()}else{$(".main-1-1").eq( $(".aa").index(this)).hide();} })
    $("button:first").click(function () {
        if(confirm("游戏将会跳转到首页，你确定吗？")){location.href="./js-round2.html";}

    })
    $("button:last").click(function () {
        if(confirm("游戏将会跳转到法官日志，你确定吗？")){
            url = "./js-round2.3.html?" +3;
            location.href=url}

    })
})



