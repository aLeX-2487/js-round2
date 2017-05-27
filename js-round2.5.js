/**
 * Created by aLeX on 2017/5/27.
 */

var abc=JSON.parse(sessionStorage.arr_2);
var user = JSON.parse(sessionStorage.user);
var num=abc.length;

//加载身份信息

$(document).ready(function() {
    var killer=[];
    var peo=[];
    for(x=0;x<user.die.length;x++){
        if(abc[user.die[x]]=="杀手"){killer.push(abc[user.die[x]])}
        else if(abc[user.die[x]]=="平民"){peo.push(abc[user.die[x]])}
    }

//确认按钮

    //html结构构建
    for (i = 0; i < num; i++) {
        $(".main-4:first").append(' <div class="main-4-1"><div class="main-4-1-1"><h3>水民</h3></div><div class="main-4-1-2"><h4>一号</h4></div><img src="./choise1.png" ></div>');
        $("h4").eq(i).text(i + 1 + "号");
        $("h3").eq(i).text(abc[i]);
    }


    //被杀死变色
    if (user.step % 2 == 0) {
        //每4步换为投票标题
        if (user.step % 4 == 0) {$("h1").text("投票");}
        //已经死去角色变色
        for (j = 0; j < user.die.length; j++) {
            $("h3").eq(user.die[j]).css("background-color", "gainsboro");
            $("h4").eq(user.die[j]).css("background-color", "gainsboro");
            //错误选择提示
            $(".main-4-1").eq(user.die[j]).bind("click", function () {

                alert("已经挂了，还要爪子！");

            })
        }
        //单选中人物函数，并改变样式。
        $(".main-4-1").bind("click", function () {

            $(".main-4-1").css("border", "2px solid white");
            $(".main-4-1").eq($(".main-4-1").index(this)).css("border", "2px solid red");
            var arr = [];
            user.die_num.push($(".main-4-1").index(this));
            sessionStorage.setItem('user', JSON.stringify(user));

            if(abc[user.die_num[user.die_num.length-1]]=="杀手"&& user.step%4==2&&user.die.indexOf(user.die_num[user.die_num.length-1])==-1){
                alert("好好活着，想开一点main！")};
           /* if(abc[user.die_num[user.die_num.length-1]]=="杀手"&& user.step==2){
            alert("好好活着，想开一点main！")};*/

        })
    }
    $("button:last").click(function () {


         //杀手死光后页面跳转
        if(abc[user.die_num[user.die_num.length-1]]=="杀手"&&killer.length+1==Math.floor(num/4)&&user.step%4!=2&&user.die.indexOf(user.die_num[user.die_num.length-1])==-1){
            user.die.push(user.die_num[user.die_num.length-1]);
            sessionStorage.setItem('user', JSON.stringify(user));
            location.href="./js-round2.6.html"}

        else if(user.step%4==2&&abc[user.die_num[user.die_num.length-1]]=="杀手"){
            alert("还想不想耍哦，喊你重新选一个！");
           }

        else if(user.die.indexOf(user.die_num[user.die_num.length-1])!=-1){
            alert("还想不想耍哦，喊你重新选一个！");
        }

        //平民死光后页面跳转
        else if(abc[user.die_num[user.die_num.length-1]]=="平民"&&peo.length+1==num-Math.floor(num/4)&&user.die.indexOf(user.die_num[user.die_num.length-1])==-1){
            user.die.push(user.die_num[user.die_num.length-1]);
            sessionStorage.setItem('user', JSON.stringify(user));location.href="./js-round2.6.html"}

        //未选择时提示
        else if(user.die[user.die.length-1]==user.die_num[user.die_num.length-1])  {alert("请选择被杀者！")}
        //跳转并自加
        else {user.step++;sessionStorage.setItem('user',JSON.stringify(user)); location.href="./js-round2.4.html";}
    })

})



