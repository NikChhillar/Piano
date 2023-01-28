const pianoKeys = document.querySelectorAll(".keys .key");
const volume = document.querySelector(".vol input");
const showKey = document.querySelector(".keys-checkbox input");


let allKeys = [];
let audio = new Audio("tunes/a.wav");

const playMusic = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    //  console.log(key.dataset.key);
    key.addEventListener("click", () => playMusic(key.dataset.key));
});

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) {
        playMusic(e.key);
    }
    // console.log(e);

}

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
}

volume.addEventListener("input", handleVolume);
showKey.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);