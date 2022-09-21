console.log("Welcome to Spotify")
let songIndex=0;
let audioElement=new Audio('1.mp3');
// audioElement.play();
let masterPlay=document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let Progressbar=document.getElementById('Progress');
let gif=document.getElementById('gif');
let masterS=document.getElementById('masterS');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Kwabs-Walk", filePath:'1.mp3', coverPath:"7.jpg"},
    {songName:"Good as Hell", filePath:'2.mp3', coverPath:"1.jpg"},
    {songName:"South Of The Border", filePath:'3.mp3', coverPath:"2.jpg"},
    {songName:"WAP", filePath:'4.mp3', coverPath:"3.jpg"},
    {songName:"Taki Taki", filePath:'5.mp3', coverPath:"4.jpg"},
    {songName:"Meant to Be", filePath:'6.mp3', coverPath:"5.jpg"},
    {songName:"Sweetest Pie", filePath:'7.mp3', coverPath:"6.jpg"},
]

songItems.forEach((Element, i)=>{
    Element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    Element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})

window.onload=function(){//handle play/pause click
    masterPlay.addEventListener('click', ()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity=0;
        }
    })
    
  }




// Listening to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    Progressbar.value=progress;    
})

Progressbar.addEventListener('change',()=>{
    audioElement.currentTime=(Progressbar.value*audioElement.duration)/100;
})

// const makeAllPlays= ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element=>{
//         element.classList.add('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     }))
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//     })
// }))

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id); //shuffling through songs
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex+1}.mp3`; //for different songs
        // audioElement.src='11.mp3';
        masterS.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`${songIndex+1}.mp3`; //for different songs
    // audioElement.src='11.mp3';
    masterS.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`${songIndex+1}.mp3`; //for different songs
    // audioElement.src='11.mp3';
    masterS.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
