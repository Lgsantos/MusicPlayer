const songs = [
    "bensound-clapandyell.mp3",
    "bensound-dance.mp3",
    "bensound-funkyelement.mp3",
    "bensound-happiness.mp3",
    "bensound-happyrock.mp3",
    "bensound-thelounge.mp3"
];

const images = [
    "pexels-kendall-hoopes-1204060.jpg",
    "pexels-luis-quintero-2774565.jpg",
    "pexels-lukas-1309599.jpg",
    "pexels-wolfgang-2747448.jpg"
];

const player = document.getElementById("player");

function createSongList () {
    const list = document.createElement("ol");
    for (let i=0; i<songs.length; i++) {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;
};


const songList = document.getElementById("songList");
songList.appendChild(createSongList());

const links = document.querySelectorAll("li");
for (const link of links) {
    link.addEventListener("click", setSong);
}

function setSong(e) {
    document.getElementById("headphones").classList.remove("pulse");
    const source = document.getElementById("source");
    source.src = "songs/" + e.target.innerText;

    document.getElementById("currentSong").innerText = `Tocando agora: ${e.target.innerText}`;

    player.load();
    player.play();
    document.getElementById("headphones").classList.add("pulse");
}

function playAudio() {
    if (player.readyState) {
        player.play();
    };
}

function pauseAudio() {
    player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
    // console.log(e);
    const volume = e.target.value;
    player.volume = volume;
}

function updateProgress () {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;

    const randomColor = "#" + Math.floor(Math.random() * 999999);

    document.querySelector(".player").style = `background:radial-gradient(circle at 0% 0%, rgba(255,0,0,1), ${randomColor} 75%)`;
    }
}