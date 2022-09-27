//Проверка поддержки Webp, добавление класса webp или no-webp для HTML
export function isWebp() {
   //Проверка поддержки webp
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   //Добавление класса _webp или _no-webp для HTML
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   });
}

//Навигация по сайту=========================================================
const crownButton = document.querySelector('.main-header__logo');
const mainMenu = document.querySelector('.main-header__menu');
const main = document.querySelector('main');

crownButton.addEventListener("click", function (e) {
   if (crownButton) {
      document.body.classList.toggle('lock');
      mainMenu.classList.toggle('active');
   }
   e.preventDefault();
}, false);

main.addEventListener("click", function (e) {
   if (mainMenu.classList.contains('active')) {
      mainMenu.classList.remove('active');
      document.body.classList.remove('lock');
   }
});

//Прокрутка при клике==========================================================
const menuLinks = document.querySelectorAll('.main-header__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;

      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         if (mainMenu.classList.contains('active')) {
            mainMenu.classList.remove('active');
            document.body.classList.remove('lock');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault()
      }
   }
}

//Питомцы=====================================================================
//табы=========================
document.querySelectorAll('.pets__tabs-trigger').forEach((item) => {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.pets__tabs-trigger').forEach(
         (chld) => chld.classList.remove('pets__tabs-trigger--active')
      );

      document.querySelectorAll('.pets__tabs-cats').forEach(
         (chld) => chld.classList.remove('pets__tabs-cats--active')
      );

      document.querySelectorAll('.pets-slider-box').forEach(
         (chld) => chld.classList.remove('pets-slider-box--active', 'pets__tabs-cats--active')
      );

      item.classList.add('pets__tabs-trigger--active');
      document.getElementById(id).classList.add('pets__tabs-cats--active');
   })
})

let mediaQuerySize = 1100;

let windowWidth = window.innerWidth;

if (windowWidth <= mediaQuerySize) {
   document.querySelector('.pets__tabs-trigger').click();
} else {
   document.querySelector('.pets__tabs-trigger').click();
}

window.addEventListener('resize', function () {
   windowWidth = window.innerWidth;

   if (windowWidth <= mediaQuerySize) {
      document.querySelector('.pets__tabs-trigger2').click();
   } else {
      document.querySelector('.pets__tabs-trigger').click();
   }
});

//Слайдер_Pets=====================
const petsSlider = new Swiper('.pets-slider', {
   loop: true,
   simulateTouch: true,
   grabCursor: true,
   navigation: {
      nextEl: '.pets-slider__button-next',
      prevEl: '.pets-slider__button-prev',
   },
   slidesPerView: 1,
   centeredSlides: true,

   effect: 'coverflow',
   coverflowEffect: {
      rotate: 40,
      stretch: 100,
      modifier: 1,
      depth: 700,
      slideShadows: true,
   },

   observer: true,
   observeParents: true,
   observeSlideChildren: true,

   breakpoints: {
      780: {
         slidesPerView: 'auto',
      }
   }
});


// Слайдер_Team=======================================================================

const teamSlider = new Swiper('.team__slider', {
   loop: true,
   simulateTouch: true,
   grabCursor: true,

   navigation: {
      nextEl: '.team__button-next',
      prevEl: '.team__button-prev',
   },
   centeredSlides: true,

   observer: true,
   observeParents: true,
   observeSlideChildren: true,
});


//Сполер FAQ=============================================================
document.querySelectorAll('.faq__item-title').forEach((item) => {
   item.addEventListener('click', () => {
      const parent = item.parentNode;

      if (parent.classList.contains('faq__item--active')) {
         parent.classList.remove('faq__item--active');
      } else {
         document.querySelectorAll('.faq__item').forEach((child) => {
            child.classList.remove('faq__item--active');
         })

         parent.classList.add('faq__item--active');
      }
   })
})
