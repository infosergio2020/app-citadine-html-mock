window.addEventListener("DOMContentLoaded",()=>{
    document.getElementById('logo').addEventListener('click',()=>toggleMenu())
    document.getElementById('menu').addEventListener('click',()=>toggleMenu())
});


const toggleMenu = ()=> {
    let menu = document.getElementById('menu');
    menu.classList.toggle("active");
}
