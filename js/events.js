const menu = document.querySelector('.menu')
const nav = document.querySelector(".nav")
const pagination = document.querySelector(".swiper-pagination")

menu.addEventListener('click',() => {
    menu.classList.toggle('close')
    nav.classList.toggle('show')
    pagination.classList.toggle('close')
})