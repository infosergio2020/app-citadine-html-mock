import lightGallery from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4";

import lgVideo from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4/plugins/video";


// EVENTOS PARA EL SIDEBAR DEL MENU DE CITADINE
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("logo").addEventListener("click", () => toggleMenu()), document.getElementById("menuIcono").addEventListener("click", () => toggleMenu())
});
const toggleMenu = () => {
    document.getElementById("menuIcono").classList.toggle("active")
};

// LIGHT GALLERY
var imagPop = document.getElementById("lightgallery");
console.log(imagPop);
if (imagPop != null){
    lightGallery(imagPop, { 
        download:false,
        speed: 500,
        addClass: 'lg-custom-thumbnails',
        
        plugins: [lgZoom, lgThumbnail,lgVideo],      
        mobileSettings:{ 
            showCloseIcon: true,
        }
     });
}