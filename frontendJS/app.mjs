import { displayMenu, changeMode } from "./navbar.js";


const d= document;
const menu= document.querySelector(".header-nav");
const body= document.querySelector("#body")

menu.addEventListener("mouseleave", (e)=>{
    displayMenu(menu)
})

// if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     changeMode(body);
//   }

d.addEventListener("click", (e)=>{
    if(e.target.classList.contains("menuclick")){
        displayMenu(menu)
    }

    if(e.target.classList.contains("dark-modeBtn")){
        changeMode(body)
    }
}) 
