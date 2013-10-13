<%

Set rs = server.CreateObject("adodb.recordset")

    sql = "select * from Qianbo_about where ViewFlag and ID=1"

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
        <p>
          <%
End If
rs.update
End If
rs.Close
Set rs = Nothing
%>