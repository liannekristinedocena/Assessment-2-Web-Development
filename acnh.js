const music = document.getElementById("bg-music");
const button = document.getElementById("music-btn");

let Playing = false; //sets the temporary value for the variable Playing as false. 

button.addEventListener("click", function () {
    if (Playing) { //States that if the variable is false, 
        music.pause(); //The music pauses 
        button.textContent = "Play Music ▶"; //and the button displays "PLAY MUSIC"
    } else { //else, if variable Playing = True 
        music.play(); //The music plays 
        button.textContent = "Pause Music ❚❚"; //and the button displays "PAUSE MUSIC"
    }
    Playing = !Playing;
});