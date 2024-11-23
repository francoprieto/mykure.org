import { animate } from "https://cdn.jsdelivr.net/npm/framer-motion@11.11.11/dom/+esm";
import { Howl, Howler } from "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js";

const logo = document.querySelector(".logo");
const disk = document.querySelector(".disk");

animate(".disk", {scale: [0,0]});

animate(
  ".disk",
  { rotate: [0, 360] },
  { repeat: Infinity, repeatType: "loop", duration: 5, ease: "linear" }
);


logo.addEventListener("click", ()=>{
    animate(".logo", { scale: [1, 0] }, { ease: "circInOut", duration: 1 });
    animate(".disk", { scale: [0, 1] }, { ease: "circInOut", duration: 1 });
});

disk.addEventListener("click", ()=>{
    animate(".disk", { scale: [1, 0] }, { ease: "circInOut", duration: 1 });
    animate(".logo", { scale: [0, 1] }, { ease: "circInOut", duration: 1 });
});