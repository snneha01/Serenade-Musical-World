console.log("welcome to spotify- sneha's version");

//initialize
let songIndex = 0 ;
let audioElement = new Audio("./song/july.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [ 
    { songName: "July", filePath:"./song/july.mp3", coverPath: "https://i.pinimg.com/564x/f5/4b/8c/f54b8ccb1d03b40853af4b8d80b043bc.jpg"},
    { songName: "Aa Chal Ke Tujhe", filePath:"./song/ackt.mp3", coverPath: "https://i.pinimg.com/564x/f5/4b/8c/f54b8ccb1d03b40853af4b8d80b043bc.jpg"},
    { songName: "Choo Lo", filePath:"./song/choolo.mp3", coverPath: "https://i.pinimg.com/564x/f5/4b/8c/f54b8ccb1d03b40853af4b8d80b043bc.jpg"},
    { songName: "Co2", filePath:"./song/co2.mp3", coverPath: "https://i.pinimg.com/564x/f5/4b/8c/f54b8ccb1d03b40853af4b8d80b043bc.jpg"},
    { songName: "In The End", filePath:"./song/ite.mp3", coverPath: "https://i.pinimg.com/564x/f5/4b/8c/f54b8ccb1d03b40853af4b8d80b043bc.jpg"},
    { songName: "Somebody That I Use To Know", filePath:"./song/best.mp3", coverPath: "https://i.pinimg.com/564x/f5/4b/8c/f54b8ccb1d03b40853af4b8d80b043bc.jpg"},
    { songName: "Apocalypse", filePath:"./song/cas.mp3", coverPath: "https://i.pinimg.com/564x/f5/4b/8c/f54b8ccb1d03b40853af4b8d80b043bc.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songs[songIndex+1].filePath}`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songs[songIndex+1].filePath}`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songs[songIndex+1].filePath}`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})