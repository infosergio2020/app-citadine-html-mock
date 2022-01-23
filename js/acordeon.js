var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
<<<<<<< HEAD
  });
}
=======
  }

  // Add public open and close methods for convenience
  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }
}

// init accordions
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordionEl) => {
  new Accordion(accordionEl);
});



// script para detectar si es o no visible
// window.addEventListener("DOMContentLoaded", () => {
//   function callback(entries,observer){
//      if(entries[0].isIntersecting){//verificamos si actualmente es visible
//        console.log("El elemento ya está visible...");
//      }else{
//        console.log("El elemento no es visible.");
//        console.log(entries[0].target.setAttribute('hidden', ''));
//      }
//    }
//    var observer = new IntersectionObserver(callback, {});
   
//    const element = document.querySelector('#sect1');
//    observer.observe(element);
//  })
>>>>>>> 33d98ca68ec90883aa71502e12b71c95bce53678
