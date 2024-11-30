import { animate } from "https://cdn.jsdelivr.net/npm/framer-motion@11.11.11/dom/+esm";

const logo = document.querySelector(".logo");
const disk = document.querySelector(".disk");

var song = new Howl({
  src: ['./assets/mykure.mp3'],
  html5: true,
  loop: true,
});

animate(".disk", {scale: [0,0]});

animate(
  ".disk",
  { rotate: [0, 360] },
  { repeat: Infinity, repeatType: "loop", duration: 5, ease: "linear" }
);


logo.addEventListener("click", ()=>{
    animate(".logo", { scale: [1, 0] }, { ease: "circInOut", duration: 1 });
    animate(".disk", { scale: [0, 1] }, { ease: "circInOut", duration: 1 });
    song.play();
});

disk.addEventListener("click", ()=>{
    animate(".disk", { scale: [1, 0] }, { ease: "circInOut", duration: 1 });
    animate(".logo", { scale: [0, 1] }, { ease: "circInOut", duration: 1 });
    song.pause();
});