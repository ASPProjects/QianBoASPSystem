<!--#include file="Include/Const.Asp" -->
<!--#include file="Include/NoSQL.Asp" -->
<!--#include file="Include/ConnSiteData.Asp" -->
<!--#include file="dy.Asp" -->
<%
Set fso = Server.CreateObject("Scripting.FileSystemObject")
If fso.FileExists(Server.MapPath(""&SysRootDir&"NoInstall.txt")) Then
    response.Redirect "install.Asp"
End If
Set fso = Nothing
Call SiteInfo()
If ISHTML = 1 Then
    Response.expires = 0
    Response.expiresabsolute = Now() - 1
    Response.addHeader "pragma", "no-cache"
    Response.addHeader "cache-control", "private"
    Response.CacheControl = "no-cache"
End If
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
        <div id="qyxw">
        	<div id="qy-neirong">
            	<ul>
                    <%=News("3,")%>
                </ul>
            </div>
        </div>
        <div id="lxwm2">
       	  <div id="lx-neirong2">
            	<%=SiteDetail%>
          </div>
        </div>
</div>
  <div id="mid-con">
    	<div id="cpzs">
        	<div id="cp-title"><img src="images/cpzs.jpg"></div>
            <div id="cp-neirong"><!--#include file="cpgundongcaifeng.asp"--></div>
        </div>
        <div class="spzs">
        	<div class="sp-title"><img src="images/spzs.jpg"></div>
            <div class="sp-neirong">
            	<ul>
                	<li><a href="sp.asp"><img src="images/sp.jpg" /></a></li>
                    <li><a href="sp.asp"><img src="images/sp2.jpg"></a></li>
                    <li><a href="sp.asp"><img src="images/sp3.jpg"></a></li>
                </ul>
            </div>
        </div>
        <div class="spzs">
        	<div class="sp-title"><img src="images/qyzs.jpg"></div>
            <div class="sp-neirong2">
            	<ul>
               	  <script type="text/javascript">
imgUrl1="images/ban1.jpg";
imgtext1="佛山市禅城区明周机械厂"
imgLink1=escape("#");
imgUrl2="images/ban2.jpg";
imgtext2="佛山市禅城区明周机械厂"
imgLink2=escape("#");
imgUrl3="images/ban3.jpg";
imgtext3="佛山市禅城区明周机械厂"
imgLink3=escape("#");


 var focus_width=763
 var focus_height=273
 var text_height=0
 var swf_height = focus_height+text_height
 
 var pics=imgUrl1+"|"+imgUrl2+"|"+imgUrl3
 var links=imgLink1+"|"+imgLink2+"|"+imgLink3
 var texts=imgtext1+"|"+imgtext2+"|"+imgtext3
 
 document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ focus_width +'" height="'+ swf_height +'">');
 document.write('<param name="allowScriptAccess" value="sameDomain"><param name="movie" value="images/focus2.swf"><param name="quality" value="high"><param name="bgcolor" value="#F0F0F0">');
 document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
 document.write('<param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'">');
 document.write('</object>');
 </script>
                </ul>
            </div>
        </div>
</div>
</div>
<!--#include file="end.asp"-->
</body>
</html>
