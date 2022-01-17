window.addEventListener("DOMContentLoaded",()=>{
    document.getElementById('logo').addEventListener('click',()=>toggleMenu())
    document.getElementById('menuIcono').addEventListener('click',()=>toggleMenu())
});


const toggleMenu = ()=> {
    let menu = document.getElementById('menuIcono');
    menu.classList.toggle("active");
}
