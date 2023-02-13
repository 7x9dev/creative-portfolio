const audio = document.querySelector("#audio");
audio.volume = 0.1;

const audioBtn = document.querySelector("#playBtn");
audioBtn.addEventListener("click", () => {
   if (audio.paused) {
      audio.play();
      audioBtn.innerHTML = `<img src="images/play.svg" alt="play button" width="56px" />`;
   } else {
      audio.pause();
      audioBtn.innerHTML = `<img src="images/pause.svg" alt="pause button" width="56px" />`;
   }
});

gsap.from(".dscr", {
   duration: 2,
   ease: "power1.in",
   delay: 1.5,
   opacity: 0,
});

gsap.from(".play-btn", {
   duration: 2,
   ease: "power1.in",
   delay: 2.5,
   opacity: 0,
});

gsap.from(".links", { delay: 3.5, duration: 1.5, y: -100, opacity: 0 });
gsap.from(".socials", { delay: 4.5, duration: 1.5, y: 100, opacity: 0 });
gsap.from(".link, .soc-link", {
   delay: 5,
   duration: 2,
   opacity: 0,
   stagger: 0.6,
});

const back = document.querySelector("#btnBack");
const next = document.querySelector("#btnNext");

const gallery = [
   "images/1.jpg",
   "images/2.jpg",
   "images/3.jpg",
   "images/4.jpg",
];

let i = 0;

next.addEventListener("click", () => {
   i++;
   if (i > gallery.length - 1) {
      i = 0;
   }
   document.querySelector("#galleryImg").src = gallery[i];
});

back.addEventListener("click", () => {
   i--;
   if (i < 0) {
      i = gallery.length - 1;
   }
   document.querySelector("#galleryImg").src = gallery[i];
});
