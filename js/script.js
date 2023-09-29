// alert("hey");
var button = document.getElementsByClassName("play-btn")[0];
var music = document.getElementsByClassName("music")[0];

music.addEventListener("mouseover", function(){
    document.getElementsByClassName("play-btn")[0].style.display="flex";
})

music.addEventListener("mouseout", function(){
    document.getElementsByClassName("play-btn")[0].style.display="none";
})

var audio1 = "music/readyforit.mp3";
var audioPlay = new Audio(audio1);
var isPlaying = true;

music.addEventListener("click", function(){
    if(isPlaying){
        audioPlay.play();
    }

    else{
        audioPlay.pause();
    }
    isPlaying = !isPlaying;
})