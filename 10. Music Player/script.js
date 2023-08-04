"use strict";

const prevBtn = document.getElementById("prev__btn");
const playBtn = document.getElementById("play__btn");
const nextBtn = document.getElementById("next__btn");

const songEl = document.getElementById("song");

const imageEl = document.getElementById("song__image");
const titleEl = document.getElementById("title");
const artistEl = document.getElementById("artist");

const progressContainerEl = document.getElementById("progress-container");
const progressEl = document.getElementById("progress");

const currentTimeEl = document.getElementById("current__time");
const durationEl = document.getElementById("duration");

const playlist = document.getElementById("playlist");

let isPlaying = false;
let songIndex = 1;

// Data
const songs = [
  {
    name: "fourth-of-july",
    artist: "Sufjan Stevens",
    title: "Fourth of July",
    duration: "4:38",
  },
  {
    name: "glimpse-of-us",
    artist: "Joji",
    title: "Glimpse of Us",
    duration: "3:53",
  },
  {
    name: "indigo-night",
    artist: "Tamino",
    title: "Indigo Night",
    duration: "4:14",
  },
  {
    name: "remembrance",
    artist: "Balmorhea",
    title: "Remembrance",
    duration: "5:59",
  },
  {
    name: "summertime-sadness",
    artist: "Lana del Rey",
    title: "Summertime Sadness",
    duration: "3:25",
  },
  {
    name: "i-know-i-am-not-the-only-one",
    artist: "Sam Smith",
    title: "I Know I'm Not The Only One",
    duration: "3:57",
  },
];

// Play song function
const playSong = () => {
  songEl.play();
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  isPlaying = true;
};

// Pause song function
const pauseSong = () => {
  songEl.pause();
  playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  isPlaying = false;
};

// Display Song
const displaySong = ({ title, name, artist }) => {
  titleEl.textContent = title;
  artistEl.textContent = artist;
  imageEl.src = `images/${name}.jpeg`;
  songEl.src = `audio/${name}.mp3`;
};

const displaySongList = () => {
  playlist.innerHTML = "";

  songs.forEach((song, index) => {
    const li = document.createElement("li");

    li.className =
      "hover:font-bold text-xs flex justify-between mb-2 cursor-pointer";

    if (songIndex === index) {
      li.classList.add("font-bold", "text-red-600");
    } else {
      li.classList.remove("font-bold", "text-red-600");
    }

    const nameSpan = document.createElement("span");
    const durationSpan = document.createElement("span");

    nameSpan.textContent = song.title;
    durationSpan.textContent = song.duration;

    li.insertAdjacentElement("afterbegin", durationSpan);
    li.insertAdjacentElement("afterbegin", nameSpan);

    li.addEventListener("click", () => {
      songIndex = index;
      displaySong(song);
      displaySongList();
      playSong();
    });

    playlist.insertAdjacentElement("beforeend", li);
  });
};

// Next and Previous song functionality

const nextSong = () => {
  songIndex = songIndex === songs.length - 1 ? 0 : songIndex + 1;

  displaySong(songs[songIndex]);
  playSong();
  displaySongList();
};

const prevSong = () => {
  songIndex = songIndex === 0 ? songs.length - 1 : songIndex - 1;

  displaySong(songs[songIndex]);
  playSong();
  displaySongList();
};

// Progress bar functionality

songEl.addEventListener("timeupdate", (e) => {
  const { currentTime, duration } = e.target;

  // Progress bar
  const progress = (currentTime / duration) * 100;
  progressEl.style.width = `${progress}%`;

  // Duration
  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = Math.floor(duration % 60);

  if (!duration) return;

  durationEl.innerText = `${durationMinutes}:${String(durationSeconds).padStart(
    2,
    "0"
  )}`;

  // Current time
  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);

  currentTimeEl.innerText = `${currentMinutes}:${String(
    currentSeconds
  ).padStart(2, "0")}`;
});

progressContainerEl.addEventListener("click", (e) => {
  const {
    offsetX: clicked,
    target: { clientWidth },
  } = e;

  const { duration } = songEl;

  const clickedDuration = (clicked / clientWidth) * duration;
  songEl.currentTime = clickedDuration;
  progressEl.style.width = `${(clicked / clientWidth) * 100}%`;
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
songEl.addEventListener("ended", () => {
  nextSong();
  displaySongList();
});

// Play and pause functionality
playBtn.addEventListener("click", function () {
  isPlaying ? pauseSong() : playSong();
});

displaySongList();

const muteSong = () => {
  songEl.muted = true;
  isPlaying = true;
  volumeBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
};

const UnmuteSong = () => {
  songEl.muted = false;
  isPlaying = true;
  volumeBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
};

volumeBtn.addEventListener("click", () => {
  if (songEl.muted == true) {
    UnmuteSong();
  } else {
    muteSong();
  }
});

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});
