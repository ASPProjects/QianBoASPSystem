<!--#include file="Include/Const.Asp" -->
<!--#include file="Include/NoSQL.Asp" -->
<!--#include file="Include/ConnSiteData.Asp" -->
<!--#include file="dy.Asp" -->
<%
Call SiteInfo()
Dim MesName, Content, SecretFlag, mMemID, mLinkman, mSex, mCompany, mAddress, mZipCode, mTelephone, mFax, mMobile, mEmail
If session("MemName")<>"" And session("MemLogin") = "Succeed" Then
    Call MemInfo()
Else
    mSex = "先生"
    mMemID = 0
    SecretFlag = "<font color=""red"">会员功能，请先注册会员。</font>"
End If
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>
<% =SeoTitle %>
-
<% =SiteTitle %>
</title>
<meta name="keywords" content="<% =Keywords %>" />
<meta name="description" content="<% =Descriptions %>" />
<link href="css/style.css" type="text/css" rel="stylesheet">
</head>

<body>
<!--#include file="top.asp"-->
<div id="middle">
  <div id="mid-left">
    	<div id="gszs">
        	<div id="chanpin-neirong">
            	<ul>
                	<!--#include file="left.asp"-->
                </ul>
            </div>
        </div>
    <div id="lxwm">
       	  <div id="lx-neirong">
            	<ul>
                	<li><span>13318335920</span></li>
                    <li>0757-63380176</li>
                    <li>www.13318335920.com</li>
                    <li>地址：广东省佛山市陈村二龙工业区</li>
                </ul>
          </div>
      </div>
  </div>
  <div id="ab-right">
  	<div id="ab-title">在线留言</div>
    <div id="ab-neirong"><!--#include file="ly.asp"--></div>
  </div>
</div>
<!--#include file="end.asp"-->
</body>
</html>
