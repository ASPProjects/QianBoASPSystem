<div id="yqlj"><span>友情链接：</span><a href="http://www.webpower.cc/">网联动力</a>、<a href="http://www.xingjiaye.com/">直线导轨</a></div>
<div id="bottom">C佛山市禅城区明周机械厂     版权所有     地址：广东省佛山市陈村二龙工业区    邮编：528041 <br />
  手机号码：13318335920 电话：0757-63380176   传真：0757-83930934 </div>
<DIV id="divStay" style="POSITION: absolute">
  <TABLE cellSpacing="0" cellPadding="0" width="100%" border="0">
    <TR>
      <TD vAlign="top" width="7%">　</TD>
    </TR>
  </TABLE>
</DIV>
<script language="JavaScript">
lastScrollY = 0;
function heartBeat(){
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
diffY = document.documentElement.scrollTop;
else if (document.body)
diffY = document.body.scrollTop
else
{/*Netscape stuff*/}
//alert(diffY);
percent=.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.getElementById("leftDiv").style.top = parseInt(document.getElementById("leftDiv").style.top)+percent+"px";
document.getElementById("rightDiv").style.top = parseInt(document.getElementById("rightDiv").style.top)+percent+"px";
lastScrollY=lastScrollY+percent;
//alert(lastScrollY);
}
//下面这段删除后，对联将不跟随屏幕而移动。
window.setInterval("heartBeat()",1);
//-->
//关闭按钮
function close_right1(){
    document.getElementById('right1').style.display='none';
}
//显示样式
</script>
<style type="text/css">
#leftDiv, #rightDiv {
	position:absolute;
	padding:0px;
	margin:0px
}
.itemFloat {
	width:90px;
	height:auto;
	line-height:15px;
	padding:0px;
	margin:0px
}
</style>
<div id="leftDiv" style="top:40px;left:5px"> </div>
<div id="rightDiv" style="top:300px;right:80px">
  <div id="right1" class="itemFloat">
    <div id="mzqq">
      <div id="qqtop"><img src="kefu/zx.jpg"></div>
      <div id="qqnr">
        <div class="zx"><a target=blank href=tencent://message/?uin=448368016&Site=工具啦&Menu=yes><img border="0" SRC=http://wpa.qq.com/pa?p=1:448368016:7 alt="点击这里给我发消息"></a> </div>
        <div class="ewm"><img src="kefu/ewm.jpg"></div>
      </div>
    </div>
  </div>
</div>
