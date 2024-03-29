﻿<!--#include file="CheckAdmin.Asp"-->
<!--#include file="../Include/Version.Asp" -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>千博企业网站管理系统 <%=Str_Soft_Version%></title>
<link href="AdminDefaultTheme/index.css" type="text/css" rel="stylesheet" />
<link href="AdminDefaultTheme/MasterPage.css" type="text/css" rel="stylesheet" />
<link href="AdminDefaultTheme/Guide.css" type="text/css" rel="stylesheet" />
<script language="javascript" src="JavaScript/jquery.js" type="text/javascript"></script>
<script language="javascript" src="JavaScript/AdminIndex.js" type="text/javascript"></script>
<script language="javascript" src="JavaScript/FrameTab.js" type="text/javascript"></script>
<script language="javascript" src="../Scripts/Admin.js" type="text/javascript"></script>
</head>

<body id="Indexbody" onLoad="onload();">
<script type="text/JavaScript">
function show(id){
    var obj;
    obj=document.getElementById('PopMenu_'+id);
    obj.style.visibility="visible";
}
function hide(id){
    var obj;
    obj=document.getElementById('PopMenu_'+id);
    obj.style.visibility="hidden";
}
function hideOthers(id){
    var divs;
    if(document.all)
    {
        divs = document.all.tags('DIV');
    }
    else
    {
        divs = document.getElementsByTagName("DIV");
    }
    for(var i = 0 ;i < divs.length;i++)
    {
        if(divs[i].id != 'PopMenu_'+id && divs[i].id.indexOf('PopMenu_')>=0)
        {
            divs[i].style.visibility="hidden";
        }
    }
}
function onload() {
    var width = document.body.clientWidth - 207;
    var lHeight = document.body.clientHeight - 78;
    var rHeight = lHeight - (jQuery("#FrameTabs").height() || 0);
    document.getElementById("main_right").style.width = width > 0 ? width : 0;
    document.getElementById("main_right").style.height = rHeight > 0 ? rHeight : 0;
    document.getElementById("left").style.height = lHeight > 0 ? lHeight : 0;
    jQuery("#FrameTabs").width(width);
    if (CheckFramesScroll) {
        CheckFramesScroll();
    }
}
window.onresize = onload;
function InitSideBarState() {
    var existentSideBarCookie = getCookie("SideBarCookie");
    var SideBarKey = document.getElementById("left").src.substring(document.getElementById("left").src.lastIndexOf('/') + 1, document.getElementById("left").src.lastIndexOf('.'));
    if (existentSideBarCookie.length != 0 && SideBarKey.length != 0 && existentSideBarCookie.indexOf(SideBarKey) != -1) {
        var arrKV = existentSideBarCookie.split("&");
        for (var v in arrKV) {
            if (arrKV[v].indexOf(SideBarKey) != -1) {
                var currentValue = arrKV[v].split("=");
                ChangeSideBarState(currentValue[1]);
            }
        }
    }
    else {
        var obj = document.getElementById("switchPoint");
        obj.alt = "关闭左栏";
        obj.src = "AdminDefaultTheme/Images/butClose.gif";
        document.getElementById("frmTitle").style.display = "block";
        onload();
    }
}
function ChangeSideBarState(temp) {
    var obj = document.getElementById("switchPoint");
    if (temp == "none") {
        obj.alt = "打开左栏";
        obj.src = "AdminDefaultTheme/Images/butOpen.gif";
        document.getElementById("frmTitle").style.display = "none";
        var width, height;
        width = document.body.clientWidth - 12;
        height = document.body.clientHeight - 70;
        document.getElementById("main_right").style.height = height;
        document.getElementById("main_right").style.width = width;
        document.getElementById("FrameTabs").style.width = width;
        if (CheckFramesScroll) {
            CheckFramesScroll();
        }
    }
    else {
        obj.alt = "关闭左栏";
        obj.src = "AdminDefaultTheme/Images/butClose.gif";
        document.getElementById("frmTitle").style.display = "block";
        onload();
    }
}
function killErrors() {
    return true;
}
window.onerror = killErrors;
</script>
  <table border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td colspan="3"><div id="content">
          <ul id="ChannelMenuItems">
            <li id="MenuMyDeskTop" onclick="ShowHideLayer('ChannelMenu_MenuMyDeskTop')"><a href="javascript:" id="AChannelMenu_MenuMyDeskTop" onClick="ShowMain('Admin_Index_Left.Asp?ID=System','')"><span id="SpanChannelMenu_MenuMyDeskTop">系统参数设置</span></a></li>
            <li id="News" onclick="ShowHideLayer('ChannelMenu_News')"><a href="javascript:" id="AChannelMenu_News" onClick="ShowMain('Admin_Index_Left.Asp?ID=News','')"><span id="SpanChannelMenu_News">新闻资讯</span></a></li>
            <li id="Product" onclick="ShowHideLayer('ChannelMenu_Product')"><a href="javascript:" id="AChannelMenu_Product" onClick="ShowMain('Admin_Index_Left.Asp?ID=Product','')"><span id="SpanChannelMenu_Product">产品管理</span></a></li>
            <li id="DownLoad" onclick="ShowHideLayer('ChannelMenu_DownLoad')"><a href="javascript:" id="AChannelMenu_DownLoad" onClick="ShowMain('Admin_Index_Left.Asp?ID=DownLoad','')"><span id="SpanChannelMenu_DownLoad">下载管理</span></a></li>
            <li id="Talent" onclick="ShowHideLayer('ChannelMenu_Talent')"><a href="javascript:" id="AChannelMenu_Talent" onClick="ShowMain('Admin_Index_Left.Asp?ID=Talent','')"><span id="SpanChannelMenu_Talent">人才</span></a></li>
            <li id="Other" onclick="ShowHideLayer('ChannelMenu_Other')"><a href="javascript:" id="AChannelMenu_Other" onClick="ShowMain('Admin_Index_Left.Asp?ID=Other','')"><span id="SpanChannelMenu_Other">其他信息</span></a></li>
            <li id="Feedback" onclick="ShowHideLayer('ChannelMenu_Feedback')"><a href="javascript:" id="AChannelMenu_Feedback" onClick="ShowMain('Admin_Index_Left.Asp?ID=Feedback','')"><span id="SpanChannelMenu_Feedback">咨询反馈</span></a></li>
            <li id="User" onclick="ShowHideLayer('ChannelMenu_User')"><a href="javascript:" id="AChannelMenu_User" onClick="ShowMain('Admin_Index_Left.Asp?ID=User','')"><span id="SpanChannelMenu_User">会员管理</span></a></li>
            <li id="Html" onclick="ShowHideLayer('ChannelMenu_Html')"><a href="javascript:" id="AChannelMenu_Html" onClick="ShowMain('Admin_Index_Left.Asp?ID=Html','')"><span id="SpanChannelMenu_Html">静态页面管理</span></a></li>
          </ul>
          <div id="SubMenu">
            <div id="ChannelMenu_" style="width: 100%; display: none;">
              <ul>
              </ul>
            </div>
            <div id="ChannelMenu_MenuMyDeskTop" style="width: 100%;">
              <ul>
                <li>当前用户：<%=CompanyAdminName%>(<%=CompanyAdminLoginIP%>)</li>
                <li><a href="javascript:ShowMain('','SysCome.Asp?Act=ClsCache')">清除系统缓存</a></li>
              </ul>
            </div>
            <div id="ChannelMenu_News" style="width: 100%; display: none;">
              <ul>
                <!--<li></li>-->
              </ul>
            </div>
            <div id="ChannelMenu_Product" style="width: 100%; display: none;">
              <ul>
                <!--<li></li>-->
              </ul>
            </div>
            <div id="ChannelMenu_DownLoad" style="width: 100%; display: none;">
              <ul>
                <!--<li></li>-->
              </ul>
            </div>
            <div id="ChannelMenu_Talent" style="width: 100%; display: none;">
              <ul>
                <!--<li></li>-->
              </ul>
            </div>
            <div id="ChannelMenu_Other" style="width: 100%; display: none;">
              <ul>
                <!--<li></li>-->
              </ul>
            </div>
            <div id="ChannelMenu_Feedback" style="width: 100%; display: none;">
              <ul>
                <!--<li></li>-->
              </ul>
            </div>
            <div id="ChannelMenu_User" style="width: 100%; display: none;">
              <ul>
                <!--<li></li>-->
              </ul>
            </div>
            <div id="ChannelMenu_Html" style="width: 100%; display: none;">
              <ul>
                <!--<li></li>-->
              </ul>
            </div>
          </div>
          <div id="Announce"><a href="../" target="_blank"><img src="AdminDefaultTheme/Images/Home.gif" width="37" height="14" border="0" alt="前台首页" /></a> <a href="http://www.qianbo.com.cn/" target="_blank"><img src="AdminDefaultTheme/Images/Help.gif" width="37" height="14" border="0" alt="技术支持：千博网络" /></a> <a href="javascript:AdminOut()"><img src="AdminDefaultTheme/Images/Exit.gif" width="37" height="14" border="0" alt="安全退出" /></a></div>
        </div></td>
    </tr>
    <tr style="vertical-align: top;">
      <td id="frmTitle"><iframe tabid="1" frameborder="0" id="left" name="left" scrolling="auto" src="Admin_Index_Left.Asp" style="width: 195px; height: 800px; visibility: inherit; z-index: 2;"></iframe></td>
      <td onClick="switchSysBar();" class="but"><img id="switchPoint" src="AdminDefaultTheme/images/butClose.gif" alt="关闭左栏" style="border: 0px; width: 12px;" /></td>
      <td>
        <div id="FrameTabs" style="overflow: hidden;"></div>
        <div id="main_right_frame">
          <iframe tabid="1" frameborder="0" id="main_right" name="main_right" scrolling="yes" src="SysCome.Asp" onload="SetTabTitle(this)" style="width: 1280px; height: 800px; visibility: inherit; z-index: 2; overflow-x: hidden;"></iframe>
          <div class="clearbox2" />
        </div></td>
    </tr>
  </table>
</body>
</html>