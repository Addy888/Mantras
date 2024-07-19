// © 2024. shobhitDev All rights reserved.
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Ram Mantra 🚩",
    name: "Ram Mantra 🚩By Aditya shastri",
    source:
      "shri ram .mp3",
  },
  {
    title: "Shri Krishna ji",
    name: "Shri Krishna ji Mantra By Aditya shastri",
    source:
      "Shri Krishna Mantra.mp3",
  },
  {
    title: "Ram Mantra🚩",
    name: "Ram Mantra 🚩By Aditya shastri",
    source:
      "shri ram .mp3",
  },
  {
    title: "Hanuman ji Mantra ",
    name: "Bajrang Baan By Aditya shastri",
    source:
      "om cham cham .mp3",
  },
  {
    title: "Shiv ji Mantra ",
    name: "Shiv Tandav  By Aditya shastri",
    source:
      "shiv tandav.mp3",
  },

  {
    title: "ganpati bappa Mantra 🙏🙏🚩🚩❤️❤️❤️❤️",
    name: "ganpati ji  🙏🚩❤️ by Aditya shastri",
    source:
      "ganpati ji .mp3",
  },
  {
    title: "Shri Hari Vishnu ji Mantra  ",
    name: "Shri Hari Vishnu ji Mantra By Aditya shastri",
    source:
      "Shri Hari Vishnu Mantra.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
// © 2024. shobhitDev All rights reserved.