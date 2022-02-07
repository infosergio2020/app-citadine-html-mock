// EVENTOS PARA EL SIDEBAR DEL MENU DE CITADINE
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("logo").addEventListener("click", () => toggleMenu()), 
    // document.getElementById("menuIcono").addEventListener("click", () => toggleMenu())
    document.getElementById("close-sideBar").addEventListener("click", () => toggleMenu())

});
const toggleMenu = () => {
    document.getElementById("menuIcono").classList.toggle("active")
    document.getElementById("logo").classList.toggle("boton-active")
    
    // let menu_deslizante=document.getElementsByClassName("sidebar-body-ul");
    // // console.log(menu_deslizante[0].children[0])
    // menu_deslizante[0].children.setAttribute('tabindex', 0)
    // document.getElementById('tab-secciones').focus();


    let lista=document.getElementsByClassName("sidebar-body-ul")[0].children;
    if(lista[0].getAttribute('tabindex')==-1){
        for (let i = 0; i < lista.length; i++) {
            console.log(lista[i].getAttribute("tabindex"));
            lista[i].setAttribute("tabindex",0);
            document.getElementById('tab-secciones').focus();
            console.log(lista[i].getAttribute("tabindex"));
        }
        
    }
    else{
        for (let i = 0; i < lista.length; i++) {
            console.log(lista[i].getAttribute("tabindex"));
            lista[i].setAttribute("tabindex",-1);
            document.getElementById('tab-secciones').blur();
            console.log(lista[i].getAttribute("tabindex"));
        }
        // tab_secciones.setAttribute('tabindex', -1);
        // document.getElementById('tab-secciones').blur();
    }

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