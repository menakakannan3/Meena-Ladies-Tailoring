const haburger  = document.querySelector(".hamburger");
const navlinkss = document.querySelector(".navlinks");
const links  = document.querySelectorAll(".navlinks li");

haburger.addEventListener('click',()=>{
    navlinkss.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade")
    });

     haburger.classList.toggle("toggle");
});