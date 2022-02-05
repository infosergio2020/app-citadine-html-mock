// EVENTOS PARA EL SIDEBAR DEL MENU DE CITADINE
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("logo").addEventListener("click", () => toggleMenu()), 
    // document.getElementById("menuIcono").addEventListener("click", () => toggleMenu())
    document.getElementById("close-sideBar").addEventListener("click", () => toggleMenu())

});
const toggleMenu = () => {
    document.getElementById("menuIcono").classList.toggle("active")
    document.getElementById("logo").classList.toggle("boton-active")
};

// LIGHT GALLERY
var imagPop = document.getElementById("lightgallery");
console.log(imagPop);
if (imagPop != null){
    lightGallery(imagPop, { 
        download:false,
        speed: 500,
        addClass: 'lg-custom-thumbnails',
        plugins: [lgZoom, lgThumbnail, lgVideo],      
        mobileSettings:{ 
            showCloseIcon: true,
        }
     });
}

let listimgPop = document.getElementsByClassName("gallery__libro");
console.log(listimgPop);
if(listimgPop != null){
    for (let i = 0; i < listimgPop.length; i++) {
        lightGallery(listimgPop[i], { 
            download:false,
            speed: 500,
            addClass: 'lg-custom-thumbnails',
            plugins: [lgThumbnail, lgVideo],
            mobileSettings:{ 
                showCloseIcon: true,
            }
         });
    }
}