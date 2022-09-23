
const menu = document.querySelector('.menu')
const nav = document.querySelector(".nav")
const pagination = document.querySelector(".swiper-pagination")

menu.addEventListener('click',() => {
    menu.classList.toggle('close')
    nav.classList.toggle('show')
    pagination.classList.toggle('close')

})

nav.querySelectorAll("h1").forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("close")
        nav.classList.remove("show")
        pagination.classList.remove('close')
    }
    
)});

const clickImg = document.getElementById("show-project");
const projects = document.querySelector(".project-01");

clickImg.addEventListener("click", () => {
    projects.classList.toggle("show");

})

projects.addEventListener("click", () => {
    projects.classList.remove("show")

})


