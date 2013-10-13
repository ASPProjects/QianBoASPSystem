<!--#include file="Include/Const.Asp" -->
<!--#include file="Include/NoSQL.Asp" -->
<!--#include file="Include/ConnSiteData.Asp" -->
<!--#include file="dy.Asp" -->
<%
Call SiteInfo()
If ISHTML = 1 Then
    Response.expires = 0
    Response.expiresabsolute = Now() - 1
    Response.addHeader "pragma", "no-cache"
    Response.addHeader "cache-control", "private"
    Response.CacheControl = "no-cache"
End If
If request.QueryString("SortID") = "" Then
    SeoTitle = "新闻中心"
ElseIf Not IsNumeric(request.QueryString("SortID")) Then
    SeoTitle = "参数错误"
ElseIf conn.Execute("select * from Qianbo_NewsSort Where ViewFlag and  ID="&request.QueryString("SortID")).EOF Then
    SeoTitle = "参数错误"
Else
    Set rs = server.CreateObject("adodb.recordset")
    sql = "select * from Qianbo_NewsSort where ViewFlag and ID="&request.QueryString("SortID")
    rs.Open sql, conn, 1, 1
    SeoTitle = rs("SortName")
    rs.Close
    Set rs = Nothing
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
  	<div id="ab-title">新闻中心</div>
    <div id="ab-neirong">
    	<div id="ab-new">
          <!--#include file="xwcaifeng.Asp"-->
        </div>
    </div>
  </div>
</div>
<!--#include file="end.asp"-->
</body>
</html>
