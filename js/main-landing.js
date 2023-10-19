$(document).ready(function(){
// ===== MEGA-MENU =====
// ===== MEGA-MENU =====
$(".dropdown-1").hover(function() {
  $('.drop-1').addClass('display-on');
  $('.homeheader').addClass('homeheader--border');
  $('.heading__catitem-svg').addClass('heading__catitem-svg--transparent');
});
$(".dropdown-1").mouseleave(function() {
  $('.drop-1').removeClass('display-on');
  $('.homeheader').removeClass('homeheader--border');
  $('.heading__catitem-svg').removeClass('heading__catitem-svg--transparent');
});

$(".dropdown-2").hover(function() {
  $('.drop-2').addClass('display-on');
  $('.homeheader').addClass('homeheader--border');
  $('.heading__catitem-svg').addClass('heading__catitem-svg--transparent');
});
$(".dropdown-2").mouseleave(function() {
  $('.drop-2').removeClass('display-on');
  $('.homeheader').removeClass('homeheader--border');
  $('.heading__catitem-svg').removeClass('heading__catitem-svg--transparent');
});

$(".dropdown-5").hover(function() {
  $('.drop-5').addClass('display-on');
  $('.homeheader').addClass('homeheader--border');
  $('.heading__catitem-svg').addClass('heading__catitem-svg--transparent');
});
$(".dropdown-5").mouseleave(function() {
  $('.drop-5').removeClass('display-on');
  $('.homeheader').removeClass('homeheader--border');
  $('.heading__catitem-svg').removeClass('heading__catitem-svg--transparent');
});

$('.item-builders').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('mainburger__li-item--show')
  $('.content-builders').slideToggle()
})
$('.item-resume').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('mainburger__li-item--show')
  $('.content-resume').slideToggle()
})
$('.item-career').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('mainburger__li-item--show')
  $('.content-career').slideToggle()
})


// ===== STEP 1 =====
// ===== STEP 1 =====
$('.navitem-pdf').on('click', function (e) {
  e.preventDefault()
  $(this).addClass('active-nav')
  $('.optimize__left-container').removeClass('optimize__left--hide')
  $('.optimize__left-btextarea').addClass('optimize__left--hide')
  $('.optimize__left-resume').addClass('optimize__left--hide')
  $('.navitem-link').removeClass('active-nav')
  $('.navitem-text').removeClass('active-nav')
})
$('.navitem-link').on('click', function (e) {
  e.preventDefault()
  $(this).addClass('active-nav')
  $('.optimize__left-btextarea').removeClass('optimize__left--hide')
  $('.optimize__left-container').addClass('optimize__left--hide')
  $('.optimize__left-resume').addClass('optimize__left--hide')
  $('.navitem-pdf').removeClass('active-nav')
  $('.navitem-text').removeClass('active-nav')
})
$('.navitem-text').on('click', function (e) {
  e.preventDefault()
  $(this).addClass('active-nav')
  $('.optimize__left-resume').removeClass('optimize__left--hide')
  $('.optimize__left-btextarea').addClass('optimize__left--hide')
  $('.optimize__left-container').addClass('optimize__left--hide')
  $('.navitem-pdf').removeClass('active-nav')
  $('.navitem-link').removeClass('active-nav')
})
// ===== STEP 2 =====
// ===== STEP 2 =====
$('.rlink').on('click', function (e) {
  e.preventDefault()
  $(this).addClass('active-nav')
  $('.optimize__right-textarea').removeClass('optimize__left--hide')
  $('.optimize__right-vacancy').addClass('optimize__left--hide')
  $('.rtext').removeClass('active-nav')
})
$('.rtext').on('click', function (e) {
  e.preventDefault()
  $(this).addClass('active-nav')
  $('.optimize__right-vacancy').removeClass('optimize__left--hide')
  $('.optimize__right-textarea').addClass('optimize__left--hide')
  $('.rlink').removeClass('active-nav')
})
// ===== PDF =====
// ===== PDF =====
$('#OpenPdfUpload').click(function(){ $('#pdfupload').trigger('click'); });

// ===== dropdown-language-1 =====
// ===== dropdown-language-1 =====
$('.top-menu__languages').on('click', function (e) {
  e.preventDefault()
  $('.dropdown-lang').toggleClass('dropdown-lang--active')
})
$('.drop-eng').on('click', function (e) {
  e.preventDefault()
  $('.dropdown-lang').removeClass('dropdown-lang--active')
  $('.lang__top-eng').removeClass('lang__top-eng--hide')
  $('.lang__top-ru').addClass('lang__top-ru--hide')
  $('.drop-ru').removeClass('drop-ru--hide')
  $('.drop-eng').addClass('drop-eng--hide')

  $('.top-menu__language-eng').removeClass('dropdown-lang-footer--active')
  $('.foot__drop-ru').removeClass('foot__drop-ru--hide')
  $('.foot__drop-eng').addClass('foot__drop-eng--hide')
  $('.lang__foot-ru').addClass('lang__foot-ru--hide')
  $('.lang__foot-eng').removeClass('lang__foot-eng--hide')
})
$('.drop-ru').on('click', function (e) {
  e.preventDefault()
  $('.dropdown-lang').removeClass('dropdown-lang--active')
  $('.lang__top-ru').removeClass('lang__top-ru--hide')
  $('.lang__top-eng').addClass('lang__top-eng--hide')
  $('.drop-eng').removeClass('drop-eng--hide')
  $('.drop-ru').addClass('drop-ru--hide')

  $('.top-menu__language-ru').removeClass('dropdown-lang-footer--active')
  $('.foot__drop-eng').removeClass('foot__drop-eng--hide')
  $('.foot__drop-ru').addClass('foot__drop-ru--hide')
  $('.lang__foot-eng').addClass('lang__foot-eng--hide')
  $('.lang__foot-ru').removeClass('lang__foot-ru--hide')
})
// ===== dropdown-language-footer =====
// ===== dropdown-language-footer =====
$('.footer-menu__language').on('click', function (e) {
  e.preventDefault()
  $('.dropdown-lang-footer').toggleClass('dropdown-lang-footer--active')
})
$('.foot__drop-eng').on('click', function (e) {
  e.preventDefault()
  $('.top-menu__language-eng').removeClass('dropdown-lang-footer--active')
  $('.foot__drop-ru').removeClass('foot__drop-ru--hide')
  $('.foot__drop-eng').addClass('foot__drop-eng--hide')
  $('.lang__foot-ru').addClass('lang__foot-ru--hide')
  $('.lang__foot-eng').removeClass('lang__foot-eng--hide')
  
  $('.dropdown-lang').removeClass('dropdown-lang--active')
  $('.lang__top-eng').removeClass('lang__top-eng--hide')
  $('.lang__top-ru').addClass('lang__top-ru--hide')
  $('.drop-ru').removeClass('drop-ru--hide')
  $('.drop-eng').addClass('drop-eng--hide')
})
$('.foot__drop-ru').on('click', function (e) {
  e.preventDefault()
  $('.top-menu__language-ru').removeClass('dropdown-lang-footer--active')
  $('.foot__drop-eng').removeClass('foot__drop-eng--hide')
  $('.foot__drop-ru').addClass('foot__drop-ru--hide')
  $('.lang__foot-eng').addClass('lang__foot-eng--hide')
  $('.lang__foot-ru').removeClass('lang__foot-ru--hide')
  
  $('.dropdown-lang').removeClass('dropdown-lang--active')
  $('.lang__top-ru').removeClass('lang__top-ru--hide')
  $('.lang__top-eng').addClass('lang__top-eng--hide')
  $('.drop-eng').removeClass('drop-eng--hide')
  $('.drop-ru').addClass('drop-ru--hide')
})

// ===== slider =====
// ===== slider =====
$('.example__slider').slick({
  infinite: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  waitForAnimate: true,
  arrows: false,
  dots: true,
  appendDots: $('.example__dots'),
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 700,
      settings: { slidesToShow: 1 }
    }
]
});

$('.example__arrow-prev').on('click', function (e) {
  e.preventDefault()
  $('.example__slider').slick('slickPrev')
})
$('.example__arrow-next').on('click', function (e) {
  e.preventDefault()
  $('.example__slider').slick("slickNext")
})

// ===== main-most =====
// ===== main-most =====
$('.most__row').on('click', function (e) {
  e.preventDefault()
  // $(this).toggleClass('most__row--active')
  if ($(this).hasClass('most__row--active')) {
    $(this).removeClass('most__row--active')
  } else {
    $('.most__row').removeClass('most__row--active')
    $(this).addClass('most__row--active')
  }
})
// ===== main-faq =====
// ===== main-faq =====
$('.faq__row').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('faq__row-icontap--active')
  $(this).children('.faq__row-text').slideToggle()
})
// ===== burger menu =====
$('.main__exit-box').on('click', function (e) {
  e.preventDefault()
  $('.mainburger__menu').toggleClass('mainburger__menu--active')
})
// ===== footer =====
$('.footer__block-title--slide').on('click', function () {
  $(this).next().slideToggle()
})





});