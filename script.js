let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('move');
    navbar.classList.toggle('active');
    bell.classList.remove('active');
});

let bell = document.querySelector('.notification');

let mbell = document.getElementById('bell');

mbell.addEventListener('click', function(){
    bell.classList.toggle('active');
});

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay:2000,
      disableOnInteraction:false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  window.onscroll= function(){mufunction()};

  function mufunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled =  (winScroll/height)*100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
  }





















 

 


  

  




