var m2 = document.getElementsByClassName("music")[1];

// var icon2 = document.getElementById("play-pause");
var isPlaying = true;
var isPlaying0 = true;

var music1 = "music/readyforit.mp3";
var playmusic1 = new Audio(music1);

m2.addEventListener("mouseover", function(){
    document.getElementsByClassName("play-btn")[1].style.animation="btn-animate 0.3s ease forwards";
});

m2.addEventListener("mouseout", function(){
    document.getElementsByClassName("play-btn")[1].style.animation="btn-animate-off 0.3s ease forwards";
});

m2.addEventListener("click", function(){
    if(isPlaying){
        document.getElementById("play-pause").classList.add("fa-pause");
        document.getElementById("play-pause").classList.remove("fa-play");
        playmusic1.play();
        
        // first music stops
        document.getElementById("play-pause1").classList.add("fa-play");
        document.getElementById("play-pause1").classList.remove("fa-pause");
        document.getElementById("play-pause2").classList.add("fa-play");
        document.getElementById("play-pause2").classList.remove("fa-pause");
        document.getElementById("play-pause3").classList.add("fa-play");
        document.getElementById("play-pause3").classList.remove("fa-pause");
        document.getElementById("play-pause4").classList.add("fa-play");
        document.getElementById("play-pause4").classList.remove("fa-pause");
        document.getElementById("play-pause5").classList.add("fa-play");
        document.getElementById("play-pause5").classList.remove("fa-pause");

        playmusic0.pause();
        playmusic2.pause();
        playmusic3.pause();
        playmusic4.pause();
        playmusic5.pause();

        // all icon turn 

    }

    else{
        document.getElementById("play-pause").classList.add("fa-play");
        document.getElementById("play-pause").classList.remove("fa-pause");
        playmusic1.pause();
    }
    isPlaying=!isPlaying;
});

m2.addEventListener("dblclick", function(){
        // playmusic1.pause();
        playmusic1.currentTime = 0;
});


// ////////4
var m0 = document.getElementsByClassName("music")[0];

var music0 = "music/slowgrenade.mp3";
var playmusic0 = new Audio(music0);

m0.addEventListener("mouseover", function(){
    document.getElementsByClassName("play-btn")[0].style.animation="btn-animate 0.3s ease forwards";
});

m0.addEventListener("mouseout", function(){
    document.getElementsByClassName("play-btn")[0].style.animation="btn-animate-off 0.3s ease forwards";
});

m0.addEventListener("click", function(){
    if(isPlaying0){
        document.getElementById("play-pause1").classList.add("fa-pause");
        document.getElementById("play-pause1").classList.remove("fa-play");
        playmusic0.play();

        // another music stops
        document.getElementById("play-pause").classList.add("fa-play");
        document.getElementById("play-pause").classList.remove("fa-pause");
        document.getElementById("play-pause2").classList.add("fa-play");
        document.getElementById("play-pause2").classList.remove("fa-pause");
        document.getElementById("play-pause3").classList.add("fa-play");
        document.getElementById("play-pause3").classList.remove("fa-pause");
        document.getElementById("play-pause4").classList.add("fa-play");
        document.getElementById("play-pause4").classList.remove("fa-pause");
        document.getElementById("play-pause5").classList.add("fa-play");
        document.getElementById("play-pause5").classList.remove("fa-pause");

        playmusic1.pause();
        playmusic2.pause();
        playmusic3.pause();
        playmusic4.pause();
        playmusic5.pause();
    }

    else{
        document.getElementById("play-pause1").classList.add("fa-play");
        document.getElementById("play-pause1").classList.remove("fa-pause");
        playmusic0.pause();
    }
    isPlaying0=!isPlaying0;
});

m0.addEventListener("dblclick", function(){
        // playmusic1.pause();
        playmusic0.currentTime = 0;
});



// ////////////////////
var m3 = document.getElementsByClassName("music")[2];

// var icon2 = document.getElementById("play-pause");
var isPlaying2 = true;

var music2 = "music/eastside.mp3";
var playmusic2 = new Audio(music2);

m3.addEventListener("mouseover", function(){
    document.getElementsByClassName("play-btn")[2].style.animation="btn-animate 0.3s ease forwards";
});

m3.addEventListener("mouseout", function(){
    document.getElementsByClassName("play-btn")[2].style.animation="btn-animate-off 0.3s ease forwards";
});

m3.addEventListener("click", function(){
    if(isPlaying2){
        document.getElementById("play-pause2").classList.add("fa-pause");
        document.getElementById("play-pause2").classList.remove("fa-play");
        playmusic2.play();

        //music stop else
        document.getElementById("play-pause").classList.add("fa-play");
        document.getElementById("play-pause").classList.remove("fa-pause");
        document.getElementById("play-pause1").classList.add("fa-play");
        document.getElementById("play-pause1").classList.remove("fa-pause");

        document.getElementById("play-pause3").classList.add("fa-play");
        document.getElementById("play-pause3").classList.remove("fa-pause");
        document.getElementById("play-pause4").classList.add("fa-play");
        document.getElementById("play-pause4").classList.remove("fa-pause");
        document.getElementById("play-pause5").classList.add("fa-play");
        document.getElementById("play-pause5").classList.remove("fa-pause");
        playmusic0.pause();
        playmusic1.pause();
        playmusic3.pause();
        playmusic4.pause();
        playmusic5.pause();
    }

    else{
        document.getElementById("play-pause2").classList.add("fa-play");
        document.getElementById("play-pause2").classList.remove("fa-pause");
        playmusic2.pause();
    }
    isPlaying2=!isPlaying2;
});

m3.addEventListener("dblclick", function(){
        playmusic2.pause();
        playmusic2.currentTime = 0;
});


// ////////////////MINE
var m4 = document.getElementsByClassName("music")[3];

// var icon3 = document.getElementById("play-pause");
var isPlaying3 = true;

var music3 = "music/mine.mp3";
var playmusic3 = new Audio(music3);

m4.addEventListener("mouseover", function(){
    document.getElementsByClassName("play-btn")[3].style.animation="btn-animate 0.3s ease forwards";
});

m4.addEventListener("mouseout", function(){
    document.getElementsByClassName("play-btn")[3].style.animation="btn-animate-off 0.3s ease forwards";
});

m4.addEventListener("click", function(){
    if(isPlaying3){
        document.getElementById("play-pause3").classList.add("fa-pause");
        document.getElementById("play-pause3").classList.remove("fa-play");
        playmusic3.play();

        // music stop else
        document.getElementById("play-pause").classList.add("fa-play");
        document.getElementById("play-pause").classList.remove("fa-pause");
        document.getElementById("play-pause1").classList.add("fa-play");
        document.getElementById("play-pause1").classList.remove("fa-pause");
        document.getElementById("play-pause2").classList.add("fa-play");
        document.getElementById("play-pause2").classList.remove("fa-pause");

        document.getElementById("play-pause4").classList.add("fa-play");
        document.getElementById("play-pause4").classList.remove("fa-pause");
        document.getElementById("play-pause5").classList.add("fa-play");
        document.getElementById("play-pause5").classList.remove("fa-pause");
        playmusic0.pause();
        playmusic1.pause();
        playmusic2.pause();
        playmusic4.pause();
        playmusic5.pause();
    }

    else{
        document.getElementById("play-pause3").classList.add("fa-play");
        document.getElementById("play-pause3").classList.remove("fa-pause");
        playmusic3.pause();
    }
    isPlaying3=!isPlaying3;
});

m4.addEventListener("dblclick", function(){
        playmusic3.pause();
        playmusic3.currentTime = 0;
});


// without me

var m5 = document.getElementsByClassName("music")[4];

// var icon4 = document.getElementById("play-pause");
var isPlaying4 = true;

var music4 = "music/withoutme.mp3";
var playmusic4 = new Audio(music4);

m5.addEventListener("mouseover", function(){
    document.getElementsByClassName("play-btn")[4].style.animation="btn-animate 0.3s ease forwards";
});

m5.addEventListener("mouseout", function(){
    document.getElementsByClassName("play-btn")[4].style.animation="btn-animate-off 0.3s ease forwards";
});

m5.addEventListener("click", function(){
    if(isPlaying4){
        document.getElementById("play-pause4").classList.add("fa-pause");
        document.getElementById("play-pause4").classList.remove("fa-play");
        playmusic4.play();

        // music stop else
        document.getElementById("play-pause").classList.add("fa-play");
        document.getElementById("play-pause").classList.remove("fa-pause");
        document.getElementById("play-pause1").classList.add("fa-play");
        document.getElementById("play-pause1").classList.remove("fa-pause");
        document.getElementById("play-pause2").classList.add("fa-play");
        document.getElementById("play-pause2").classList.remove("fa-pause");
        document.getElementById("play-pause3").classList.add("fa-play");
        document.getElementById("play-pause3").classList.remove("fa-pause");

        document.getElementById("play-pause5").classList.add("fa-play");
        document.getElementById("play-pause5").classList.remove("fa-pause");
        playmusic0.pause();
        playmusic1.pause();
        playmusic2.pause();
        playmusic3.pause();
        playmusic5.pause();
    }

    else{
        document.getElementById("play-pause4").classList.add("fa-play");
        document.getElementById("play-pause4").classList.remove("fa-pause");
        playmusic4.pause();
    }
    isPlaying4=!isPlaying4;
});

m5.addEventListener("dblclick", function(){
        playmusic4.pause();
        playmusic4.currentTime = 0;
});


// IDGAF

var m6 = document.getElementsByClassName("music")[5];

// var icon5 = document.getElementById("play-pause");
var isPlaying5 = true;

var music5 = "music/idgaf.mp3";
var playmusic5 = new Audio(music5);

m6.addEventListener("mouseover", function(){
    document.getElementsByClassName("play-btn")[5].style.animation="btn-animate 0.3s ease forwards";
});

m6.addEventListener("mouseout", function(){
    document.getElementsByClassName("play-btn")[5].style.animation="btn-animate-off 0.3s ease forwards";
});

m6.addEventListener("click", function(){
    if(isPlaying5){
        document.getElementById("play-pause5").classList.add("fa-pause");
        document.getElementById("play-pause5").classList.remove("fa-play");
        playmusic5.play();
        // music stop else
        document.getElementById("play-pause").classList.add("fa-play");
        document.getElementById("play-pause").classList.remove("fa-pause");
        document.getElementById("play-pause1").classList.add("fa-play");
        document.getElementById("play-pause1").classList.remove("fa-pause");
        document.getElementById("play-pause2").classList.add("fa-play");
        document.getElementById("play-pause2").classList.remove("fa-pause");
        document.getElementById("play-pause3").classList.add("fa-play");
        document.getElementById("play-pause3").classList.remove("fa-pause");
        document.getElementById("play-pause4").classList.add("fa-play");
        document.getElementById("play-pause4").classList.remove("fa-pause");

        playmusic0.pause();
        playmusic1.pause();
        playmusic2.pause();
        playmusic4.pause();
        playmusic3.pause();
    }

    else{
        document.getElementById("play-pause5").classList.add("fa-play");
        document.getElementById("play-pause5").classList.remove("fa-pause");
        playmusic5.pause();
    }
    isPlaying5=!isPlaying5;
});

m6.addEventListener("dblclick", function(){
        playmusic5.pause();
        playmusic5.currentTime = 0;
});



//NAVBAR TO VIEW
function navbarVisible(){
//    alert("bhadwe");
    document.getElementById("left").style.animation="navAnimate 1s ease forwards";
//    document.getElementById("left").style.animation="navAnimate 1s ease forwards;"
    document.getElementsByClassName("stick1")[0].style.transform="rotate(45deg)";
    document.getElementsByClassName("stick2")[0].style.display="none";
    document.getElementsByClassName("stick3")[0].style.transform="rotate(-45deg)";
};

function navbarInVisible(){
//    alert("bhadwe");
    document.getElementById("left").style.animation="navAnimateInvisible 1s ease forwards";
//    document.getElementById("left").style.animation="navAnimate 1s ease forwards;"
};


function navbarVisible650(){
//    alert("bhadwe");
    document.getElementById("left").style.animation="navAnimate650 1s ease forwards";
//    document.getElementById("left").style.animation="navAnimate 1s ease forwards;"
    document.getElementsByClassName("stick1")[0].style.transform="rotate(45deg)";
    document.getElementsByClassName("stick2")[0].style.display="none";
    document.getElementsByClassName("stick3")[0].style.transform="rotate(-45deg)";
};

function navbarInVisible650(){
//    alert("bhadwe");
    document.getElementById("left").style.animation="navAnimateInvisible650 1s ease forwards";
//    document.getElementById("left").style.animation="navAnimate 1s ease forwards;"
};