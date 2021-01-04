let button_Alif = document.querySelector("#aAlif");

let audio_Alif = new Audio('/audios/arabicAlpha/alif.mp3');



let playAlif = () => {
    prompt("alix");
    audio_Alif.play();
}


button_Alif.addEventListener("click", playAlif);