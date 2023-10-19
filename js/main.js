$(document).ready(function(){


// ================================= INDEX-HOME =======================================
// ================================= INDEX-HOME =======================================

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


$('.homemain__heading-catitem').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('catitem--active')
})

$('.main__exit-box').on('click', function (e) {
  e.preventDefault()
  $('.mainburger__menu').toggleClass('mainburger__menu--active')
})

// ===== slider =====

var mq = window.matchMedia( "(max-width: 1400px)" );
if (mq.matches) {
  $('.homemain__heading-categories').slick({
    infinite: false,
    slidesToShow: 6,
    // slidesToScroll: 1, 
    arrows: false,
    centerPadding: 0,
    responsive: [
        {
          breakpoint: 1500,
          settings: { slidesToShow: 5 }
        },
        {
          breakpoint: 1300,
          settings: { slidesToShow: 4 }
        },
        {
          breakpoint: 1024, // 800x600
          settings: { slidesToShow: 4 }
        },
        {
          breakpoint: 800, // 768x1024
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 768, // 600x800
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 600, // 480x320
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 480, // 320x480
          settings: { slidesToShow: 2 }
        }
    ]
  });

  $('.homemain__popart-contgrid').slick({
    infinite: false,
    slidesToShow: 3,
    // slidesToScroll: 1, 
    arrows: false,
    centerPadding: 0,
    responsive: [
        {
          breakpoint: 1100, // 800x600
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 700, // 800x600
          settings: { slidesToShow: 1 }
        },
    //     {
    //       breakpoint: 1024, // 800x600
    //       settings: { slidesToShow: 4 }
    //     },
    //     {
    //       breakpoint: 800, // 768x1024
    //       settings: { slidesToShow: 3 }
    //     },
    //     {
    //       breakpoint: 768, // 600x800
    //       settings: { slidesToShow: 3 }
    //     },
    //     {
    //       breakpoint: 600, // 480x320
    //       settings: { slidesToShow: 3 }
    //     },
    //     {
    //       breakpoint: 480, // 320x480
    //       settings: { slidesToShow: 2 }
    //     }
    ]
  });
} else {
  // window width is more than 900px
}



var scroll = new IScroll('.homemain__heading-categories > *:nth-child(1) ', {
    scrollX: true,
    scrollbars: true, 
    interactiveScrollbars: true,
    fadeScrollbars: false,
    hideScrollbars: false,
    scrollY: false,
    eventPassthrough: true,
    preventDefault: false,
});
var scroll2 = new IScroll('.homemain__popart-contgrid > *:nth-child(1) ', {
    scrollX: true,
    scrollbars: true, 
    interactiveScrollbars: true,
    fadeScrollbars: false,
    hideScrollbars: false,
    scrollY: false,
    eventPassthrough: true,
    preventDefault: false,
});

// ====== index-post =======
$('.postmain__burger-top').on('click', function (e) {
  e.preventDefault()
  // $(this).toggleClass('mainburger__li-item--show')
  $('.postmain__burger-bottom').slideToggle()
})
// ===== stiky ====
// postmain__content-left
var stickyEl = new Sticksy('.postmain__content-left')






console.log('123')

});
