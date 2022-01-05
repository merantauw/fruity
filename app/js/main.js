$(function () {

  $(window).scroll(function () {
    $scrollPosition = $(window).scrollTop();
    // console.log($scrollPosition);
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

  $('.reviews__items').slick({
    infinite: false,
    prevArrow: '<button class="slick-prev"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.8334 0.5L10.8309 2.4975L4.34257 9L10.8309 15.5025L8.8334 17.5L0.333403 9L8.8334 0.5Z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="slick-next"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.1666 0.5L0.169098 2.4975L6.65743 9L0.169098 15.5025L2.1666 17.5L10.6666 9L2.1666 0.5Z" fill="#fff"/></svg></button>',
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 420,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $('.header__burger').on('click', function () {
    $('.header__burger,.menu__list,.header__contact-inner').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.menu__list').on('click', function () {
    $('.header__burger,.menu__list,.header__contact-inner').removeClass('active');
    $('body').removeClass('lock');
  });

  
  $('.footer__top-subtitle').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('hidden');
  });

})