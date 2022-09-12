let swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    spaceBetween: 0,
    hashNavigation: true,
    mousewheel: true,
    speed: 600,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="swiper-pagination-bullet"></span>`;
        },
  },
}) 

let swiper2 = new Swiper('.swiper-projects', {
    slidesPerView: 1,
    spaceBetween: 10,
    
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});





