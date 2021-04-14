// alert("Looking for something?");
// console.warn("This is warning");
// console.log("Hello World", 4+6);
// console.error("No error");
// document.write("<br>Dive into programming");

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    
})

