<%-- 
    Document   : index
    Created on : Sep 11, 2023, 10:53:35 PM
    Author     : MD NEHAL AKHLAQUE
--%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
    <style>
        body{
            display: flex;
            flex-direction: ;
        }
    </style>
    <link rel="stylesheet" href="css/stylecopy.css">
    <script src="https://kit.fontawesome.com/697eb2b181.js" crossorigin="anonymous"></script>
</head>
<body>
    <div id="outer">
        <div id="left">
            <button class="close-btn" onclick="navbarInVisible()">
                <span class="stick1"></span>
                <span class="stick2"></span>
                <span class="stick3"></span>
            </button>
            <div id="top">
                <div class="home-btn">
                    <i class="fa-solid fa-house" style="margin-right: 20px"></i>Home
                </div>
                <div class="search-btn">
                    <i class="fa-solid fa-magnifying-glass" style="margin-right: 20px"></i>Search
                </div>
            </div>

            <div id="bottom"></div>
        </div>
        <div id="right">
            
            <div class="nav">
                <button class="close-btn" onclick="navbarVisible()">
                    <span class="stick1"></span>
                    <span class="stick2"></span>
                    <span class="stick3"></span>
                </button>
                <button class="btn-signup" style="width: 100px;"  onclick="window.location.href='signup.jsp'">Sign up</button>
                <button class="btn-login" style="width: 100px;" onclick="window.location.href='login.jsp'">Log in</button>
            </div>
            
            <div id="main-block">
                <p style="font-size: 20px; font-weight: 900; margin-top: 5px; margin-bottom: 40px;">Spotify Playlists</p>
                <div class="music-row">
                <div class="music">
                    <div class="icon1">
                        <div class="play-btn">
                            <i id="play-pause1" class="fa-solid fa-play" style="color: #000000;"></i>
                        </div>
                    </div>
                    Slow Grenade
                </div>
                <div class="music">
                    <div class="icon2">
                        <div class="play-btn">
                            <i id="play-pause" class="fa-solid fa-play" style="color: #000000;"></i>
                        </div>
                    </div>
                    Ready For It...
                </div>

                <div class="music">
                    <div class="icon3">
                        <div class="play-btn">
                            <i id="play-pause2" class="fa-solid fa-play" style="color: #000000;"></i>
                        </div>
                    </div>
                    Eastside
                </div>

                <div class="music">
                    <div class="icon4">
                        <div class="play-btn">
                            <i id="play-pause3" class="fa-solid fa-play" style="color: #000000;"></i>
                        </div>
                    </div>
                    M.I.N.E.
                </div>

                <div class="music">
                    <div class="icon5">
                        <div class="play-btn">
                            <i id="play-pause4" class="fa-solid fa-play" style="color: #000000;"></i>
                        </div>
                    </div>
                    Without Me
                </div>

                <div class="music">
                    <div class="icon6">
                        <div class="play-btn">
                            <i id="play-pause5" class="fa-solid fa-play" style="color: #000000;"></i>
                        </div>
                    </div>
                    IDGAF
                </div>
                </div>
            </div>
        </div>
    </div>

    
    <script src="js/stf.js"></script>
</body>
</html>







