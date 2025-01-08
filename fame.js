// songs :
// for mp3 music download we have refferred to this website :
// pagalfree (ignore aads and visit again)

// background :
// images from the website Unplash

// remove bg :
// this is the website used for removing background.





// INITIALIZE VARIABLES
console.log ("Welcome To Spotify");
let songIndex = 0;
let audioElement = new Audio ("1.mp3");
let masterPlay = document.getElementById ("masterPlay")
let myProgressBar = document.getElementById ("myProgressBar")
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let txt = document.getElementById("songInfo2");





// ARRAY OF OBJECTS
let songs = [
    {songName: "Papa Meri Jaan", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Aisa Me Shaitaan", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "Give Me Some Sunshine", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "All Iz well", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Jamal Kudu", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Ae Dil Hai Mushkil", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "Arjan Vailey", filePath: "7.mp3", coverPath: "7.jpg"},
]
// no need of this unecessarry thing
// songItems.forEach( (element, i) => {
//     console.log(element, i);
//     element.getElementByTagName("img")[0].src = songs[i].coverPath;
//     getElementsByClassName("span")[0].innerText = songs[i].songName;
// })





// HANDLE PLAY/PAUSE CLICK
masterPlay.addEventListener("click", () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity = 1;

        // display change in song name 
        txt.innerText = songs[songIndex].songName;

        // EXTRAS 
        // for controlling individual song pause/play icon from masterplay
        document.getElementById(`${songIndex}`).classList.remove("fa-music");
        document.getElementById(`${songIndex}`).classList.add("fa-circle-pause");
        document.getElementById(`${songIndex}`).classList.add("copy");


        
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity = 0;

        // display change in song name 
        txt.innerText = songs[songIndex].songName;

        // EXTRAS
        // for controlling individual song pause/play icon from masterplay
        document.getElementById(`${songIndex}`).classList.add("fa-music");
        document.getElementById(`${songIndex}`).classList.remove("fa-circle-pause");
        document.getElementById(`${songIndex}`).classList.remove("copy");
    }
})





// SEEKBAR CONTINOUS FLOW
// Listen to Event
audioElement.addEventListener("timeupdate", () => {
    console.log("timeupdate");

    // we are using parseInt to get exact integer value
    // inside parseInt we will get value in percentage (float)

    // Update Seekbar
    // simple maths is used (talwaar rule), write it on paper very easy 
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})





// UPDATING SONG TIME BY CHANGING SEEKBAR
myProgressBar.addEventListener("change", () => {
    // simple maths
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})





// ONCLICK PLAY SPECIFIC ABOVE BUTTON
// no need of this unecesarry function
// const makeAllPlays = () => {
//     element.addEventListener ("click", (e) => {
//         console.log (e);

//         e.target.classList.remove("fa-circle-pause");
//         e.target.classList.remove("copy");

//         e.target.classList.add("fa-music");
//     });
// }

Array.from (document.getElementsByClassName ("songItemPlay") ).forEach((element) => {
    element.addEventListener ("click", (e) => {
    // for converting id into integer value
    console.log (e);
    songIndex = parseInt(e.target.id);
 
    audioElement.src = `${songIndex+1}.mp3`;

    if(audioElement.paused || audioElement.currentTime <= 0) {  

        e.target.classList.remove("fa-music");
        e.target.classList.add("fa-circle-pause");
        e.target.classList.add("copy");

        // back tick used
        // audioElement.src = `${songIndex+1}.mp3`;
        audioElement.play();

        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity = 1;

        // display change in song name 
        txt.innerText = songs[songIndex].songName;



        // EXTRAS 
    }

    else {

        e.target.classList.add("fa-music");
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.remove("copy");

        // back tick used
        // audioElement.src = `${songIndex+1}.mp3`;
        // audioElement.currentTime = 0;
        audioElement.pause();

        masterPlay.classList.add("fa-circle-play")
        masterPlay.classList.remove("fa-circle-pause")
        gif.style.opacity = 0;

        // display change in song name 
        txt.innerText = songs[songIndex].songName;
    }
    });
});

// src :-
// .src Property: The .src property specifies the location (URL) 
// of the audio file to be played

// target :-
// by target we will get that element by clicking on which element has occurred





// NEXT SONG
// total songs = 7 means last index = 6
document.getElementById("next").addEventListener("click", () => {
    audioElement.pause();
    if (songIndex >= 6) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }

    // back tick used
    console.log(`${songIndex+1}.mp3`)
    audioElement.src = `${songIndex+1}.mp3`;

    // display change in song name 
    txt.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
    gif.style.opacity = 1;






    // EXTRAS
    // the index below is the updated index from above if remember this thing VIMP  
    if (songIndex == 0) {
        document.getElementById("0").classList.remove("fa-music");
        document.getElementById("0").classList.add("fa-circle-pause");
        document.getElementById("0").classList.add("copy");
       
        document.getElementById("6").classList.add("fa-music");
        document.getElementById("6").classList.remove("fa-circle-pause");
        document.getElementById("6").classList.remove("copy");      
    }
    if (songIndex != 0) {

        // EXTRAS 
        // FOR NEXT ELEMENT
        // for controlling individual song pause/play icon from masterplay
        document.getElementById(`${songIndex}`).classList.remove("fa-music");
        document.getElementById(`${songIndex}`).classList.add("fa-circle-pause");
        document.getElementById(`${songIndex}`).classList.add("copy");

        // EXTRAS
        // FOR PREVIOUS ELEMENT
        // for controlling individual song pause/play icon from masterplay
        document.getElementById(`${songIndex-1}`).classList.add("fa-music");
        document.getElementById(`${songIndex-1}`).classList.remove("fa-circle-pause");
        document.getElementById(`${songIndex-1}`).classList.remove("copy");
 
    }

})





// PREVIOUS SONG
document.getElementById("previous").addEventListener("click", () => {
    audioElement.pause();
    if (songIndex <= 0) {
        songIndex = 6;
    }
    else {
        songIndex -= 1;
    }

    // back tick used
    console.log(`${songIndex+1}.mp3`)
    audioElement.src = `${songIndex+1}.mp3`;

    // display change in song name 
    txt.innerHTML = songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
    gif.style.opacity = 1;




    // EXTRAS
    if(songIndex == 6) {
        document.getElementById("6").classList.remove("fa-music");
        document.getElementById("6").classList.add("fa-circle-pause");
        document.getElementById("6").classList.add("copy");
       
        document.getElementById("0").classList.add("fa-music");
        document.getElementById("0").classList.remove("fa-circle-pause");
        document.getElementById("0").classList.remove("copy");     
    }
    if(songIndex != 6){

        // EXTRAS
        // FOR PREVIOUS ELEMENT
        // for controlling individual song pause/play icon from masterplay
        document.getElementById(`${songIndex}`).classList.remove("fa-music");
        document.getElementById(`${songIndex}`).classList.add("fa-circle-pause");
        document.getElementById(`${songIndex}`).classList.add("copy");        

        // EXTRAS
        // FOR NEXT ELEMENT
        // for controlling individual song pause/play icon from masterplay
        
        document.getElementById(`${songIndex+1}`).classList.add("fa-music");
        document.getElementById(`${songIndex+1}`).classList.remove("fa-circle-pause");
        document.getElementById(`${songIndex+1}`).classList.remove("copy");
    }
})





