<%-- 
    Document   : code
    Created on : 8 Sep, 2023, 2:09:52 PM
    Author     : Md Nehal Akhlaque
--%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    try
    {
    String usrname=request.getParameter("usrname");
    String usrdob=request.getParameter("usrdob");
    String usremail=request.getParameter("usremail");
    String usrpass=request.getParameter("usrpass");
    String usrconfpass=request.getParameter("usrconfpass");
    String usrmob=request.getParameter("usrmob");
    
    if(usrpass.equals(usrconfpass)){
        Class.forName("com.mysql.jdbc.Driver");
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/spotify?characterEncoding=utf-8","root","");
        String query="insert into signup values ('"+usrname+"','"+usrdob+"','"+usremail+"','"+usrpass+"','"+usrconfpass+"','"+usrmob+"')";
        PreparedStatement ps=con.prepareStatement(query);
        ps.executeUpdate();
        con.close();
        out.print("<script>window.alert(usrpass);</script>");
    }
    else{
        out.print("<script>window.alert('passwords doesnot match');window.location.href='signup.jsp'</script>");
    }
    }
    catch (ClassNotFoundException e1){e1.printStackTrace();}
                catch(SQLException e1){e1.printStackTrace();}
    
        out.print("<script>window.location.href='login.jsp';</script>");
%>