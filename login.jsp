
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>

      <head>
            
            <title>Spotify</title>
            
            <style>
                  body{
                      background-image: linear-gradient(#1A1A1A, #010101); 
                      margin:0;
                      padding:0;
                      color:white;
                      font-family: 'Ubuntu', sans-serif;
                      }
                      
                  #header{
                      width:98.08%;
                      height:70px;
                      background-color:#010001;
                      margin:0;
                      padding-left:40px;
                      padding-top:30px;
                      color:white;
                  }
                  
                  
                  #form-base{
                      width:560px;
                      height:80%;
                      background-color:#010001;
                      margin-top:30px;
                      padding:70px 90px;
                      border-radius:10px;
                  }
            .login-button{
                      width:100%;
                      height:27%;
                      border-radius:200px;
                      margin-bottom:12.5px;
                      background-color:#23D962;
                      color:black;
                      font-size:15px;
                  }
            
                  .buttons{
                      width:57%;
                      height:5%;
                      border-radius:200px;
                      margin-bottom:12.5px;
                      background-color:#010001;
                      border:1px solid #727272;
                      color:white;
                      font-size:15px;
                  }
                  
                  .buttons:hover{
                      border:1px solid white;
                      
                  }
                  
                  i{
                  text-align:left;
                  }
                  
                  hr{
                  border:.1px solid #282928;
                  }
                  
                  #form-div{
                  height:20%;
                  width:57%;
                  text-align:left;
                  background-color:#010001;
                  margin-top:33px;
                  }
                  
                  input{
                  width:100%;
                  height:50px;
                  color:white;
                  background-color:#121313;
                  border:1px solid #727272;
                  padding-left:15px;
                  margin:10px 0px 20px;
                  border-radius:5px;
                  }
                  
                  /* Styling for the switch container */
.switch {
  position: relative;
  display: inline-block;
  width: 33px;
  height: 20px;
}

/* Hide the default checkbox */
.switch input {
  display: none;
}

/* Styling for the slider (the visible part of the switch) */
.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc; /* Background color of the switch when off */
  border-radius: 34px; /* Round corners to create a pill shape */
  cursor: pointer;
  transition: 0.1s; /* Transition effect to animate the switch */
}

/* Styling for the slider when it's on (checked state) */
.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 15px;
  left: 4px;
  bottom: 4px;
  background-color: white; /* Color of the slider when on */
  border-radius: 50%; /* Create a circular knob */
  transition: 0.1s; /* Transition effect to animate the knob */
}

/* Styling for the slider when it's checked (on state) */
input:checked + .slider {
  background-color: #23D962; /* Background color of the switch when on */
}

/* Styling for the slider's knob when it's checked (on state) */
input:checked + .slider:before {
  transform: translateX(11px); /* Move the knob to the right when on */
}

            </style>
            <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Cherry+Bomb+One&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Press+Start+2P&family=Ubuntu:wght@500;700&family=Victor+Mono:wght@600&display=swap" rel="stylesheet">
            <script src="https://kit.fontawesome.com/697eb2b181.js" crossorigin="anonymous"></script>
      </head>
      
      <body>
      
            <div id="header">
                <i class="fa-brands fa-spotify" style="color: #ffffff; font-size:40px;"></i> <stong style="font-size:28px; font-family: 'Cherry Bomb One', cursive;"><a href="index.jsp" style="text-decoration: none; color: white;">Spotify</a></strong>
            </div>
            
            <center>
                  
                    <div id="form-base">
                          <h1 style="font-size:40px;">Log in to Spotify</h1>
                          
                          <button class="buttons"><i class="fa-brands fa-google fa-xl" style="color: #ffffff;margin-right:30px;"></i><b>Continue with Google</b></button><br>
                          <button class="buttons"><i class="fa-brands fa-facebook fa-xl" style="color: #ffffff;margin-right:30px;"></i><b>Continue with Facebook</b></button><br>
                          <button class="buttons"><i class="fa-brands fa-apple fa-xl" style="color: #ffffff;margin-right:30px;"></i><b>Continue with Apple</b></button><br>
                          <button class="buttons"><b>Continue with phone number</b></button><br/><br/>
                          <hr>
                          <div id="form-div">
                          <form action="index.html" method="post">
                        
                              <b>Email or username</b>
                              <b><input type="email/text" placeholder="Email or username" required="true"></b>
                        
                              <b>Password</b>
                              <b><input type="password" placeholder="Password"></b>
                        
                        
                        <label class="switch">
                          <input type="checkbox" id="toggleButton">
                          <span class="slider"></span>
                        </label>&nbsp;Remember me<br><br><br>
                        <button type="submit" class="login-button"><b>Login</b></button><br/><br/>
                        
                          </form>
                          
                         
                          </div><br><br><br><br><br><br><br><br><br>
                           <a href="#" style="color:white;"><strong>Forgot your password?</strong></a><br>
                           <hr><br><br>
                           Don't have account?<a href="#" style="color:white;"> Sign up for Spotify</a>
                    </div>
            </center>
      
      
      </body>

</html>
