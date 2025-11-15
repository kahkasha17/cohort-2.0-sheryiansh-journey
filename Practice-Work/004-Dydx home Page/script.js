// Navbar coding

const nav=document.querySelector('.navbar');
const menu=document.querySelector('.menu');
const navItems = document.querySelector(".nav-items");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){
        nav.classList.add('nav-scroll')      
    }
    else {
        nav.classList.remove('nav-scroll');}
})


menu.addEventListener("click", () => {
  navItems.classList.toggle("show");

  if (menu.innerHTML.includes("ri-menu-fill")) {
    menu.innerHTML = '<i class="ri-close-line"></i>';
  } else {
    menu.innerHTML = '<i class="ri-menu-fill"></i>';
  }
});







