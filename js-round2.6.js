/**
 * Created by aLeX on 2017/5/27.
 */

var abc=JSON.parse(sessionStorage.arr_2);
var user = JSON.parse(sessionStorage.user);
var num=abc.length;
$(document).ready(function(){
    //判断哪方获胜
    if (abc[user.die_num[user.die_num.length-1]]=="杀手") {
        $(".sp1").text("杀手"+0+"人");
        $(".sp2").text("平民"+(num - user.die.length)+"人");
    }
    else {
        $(".sp1").text("杀手"+(num - user.die.length)+"人");
        $(".sp2").text("平民"+0+"人");
    }
    var arr_day=new Array("一","二","三","四","五","六","七","八","九");  //汉字第几天合集
    for(a=0;a<Math.floor((user.step-2)/4);a++){
        $(".main-0").append($(".main-3:first").clone());
        $("h3").eq(a+1).text("第"+arr_day[a+1] +"天");//复制追加每天内容及事件
    }//第几天标记
    for(b=0;b<user.die.length;b++){
        $(".s1").eq(b).text((user.die[b])+1);
        $(".s3:even").text("号被杀手杀死，他的身份是")
        $(".s3:odd").text("号被全民投票投死，他的身份是")
        $(".s2").eq(b).text(abc[(user.die[b])]); }//投票提示信息
    if(user.die.length%2==1){
        $(".s3:last").text("")
    }

})
