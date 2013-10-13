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
ID = request.QueryString("ID")
If ID <> "" Or IsNumeric(ID) Then
    Set rs = server.CreateObject("adodb.recordset")
    sql = "select * from Qianbo_Others where ViewFlag and ID= 1"
    rs.Open sql, conn, 1, 3
    If rs("SeoKeywords") <> "" Then
        SeoKeywords = rs("SeoKeywords")
    Else
        SeoKeywords = rs("OthersName")
    End If
    If rs("SeoDescription") <> "" Then
        SeoDescription = rs("SeoDescription")
    Else
        SeoDescription = rs("OthersName")
    End If
    SeoTitle = rs("OthersName")
End If
rs.Close
Set rs = Nothing
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>
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
  	<div id="ab-title">联系我们</div>
    <div id="ab-neirong">
    	<div style="width:300px; float:left; line-height:25px">
          <div> 
            <%

Set rs = server.CreateObject("adodb.recordset")

    sql = "select * from Qianbo_Others where ViewFlag and ID=1"

rs.Open sql, conn, 1, 3
If rs.EOF Then
%>
            <div class="mm">暂无相关信息</div>
            <%
Else
    If ViewNoRight(rs("GroupID"), rs("Exclusive")) Then
%>
            <%=rs("Content")%>
            <%else%>
            <div class="mm" align="center">无查看权限</div>
            <%
End If
rs.update
End If
rs.Close
Set rs = Nothing
%>
          </div>
          <br />
        </div>
        <div style="width:445px; float:left;  overflow:hidden; margin-top:20px; margin-left:10px">
        <iframe id='mapbarframe' border='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' framespacing='0' frameborder='0'scrolling='no' width='445' height='400' src='http://searchbox.mapbar.com/publish/template/template1010/index.jsp?CID=1990ch&tid=tid1010&showSearchDiv=1&cityName=%E4%BD%9B%E5%B1%B1%E5%B8%82&nid=MAPBTNTPXOYAZMFBTPHPX&width=445&height=400&infopoi=2&zoom=10&control=1'></iframe>



        </div>
    </div>
  </div>
</div>
<!--#include file="end.asp"-->
</body>
</html>
