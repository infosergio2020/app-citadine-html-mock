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
lightGallery(imagPop, { 
    download:false,
    speed: 500,
    plugins: [lgZoom],
    mobileSettings:{ 
        // controls: false, 
        showCloseIcon: true, 
        // download: false, 
    }
 });