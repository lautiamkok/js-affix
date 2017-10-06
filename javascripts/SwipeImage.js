'use strict'

import $ from 'jquery'
import Swiper from 'swiper'

// https://googlechrome.github.io/samples/arrows-es6/
// https://googlechrome.github.io/samples/classes-es6/
class SwipeImage {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  constructor () {
    // Initialize Swiper: banner
    var swiperBanner = new Swiper('.banner-swiper-block .swiper-container', {
      pagination: '.banner-swiper-block .swiper-pagination',
      slidesPerView: 1,
      paginationClickable: true,
      centeredSlides: true,
      spaceBetween: 0,
      loop: true,
      keyboardControl: true,
      nextButton: '.banner-swiper-block .swiper-button-next',
      prevButton: '.banner-swiper-block .swiper-button-prev'
    })

    // Initialize Swiper: container
    var swiperColumns4 = new Swiper('.columns-swiper-block.columns-4 .swiper-container', {
      pagination: '.columns-swiper-block.columns-4 .swiper-pagination',
      slidesPerView: 4,
      paginationClickable: true,
      spaceBetween: 30,
      freeMode: true,
      grabCursor: true,
      // loop: true,
      keyboardControl: true,
      nextButton: '.columns-swiper-block.columns-4 .swiper-button-next',
      prevButton: '.columns-swiper-block.columns-4 .swiper-button-prev',

      // Responsive breakpoints
      breakpoints: {
        320: {
          slidesPerView: 1
          // spaceBetween: 10
        },
        // when window width is <= 480px - small
        480: {
          slidesPerView: 2
          // spaceBetween: 10
        },
        // when window width is <= 640px - medium
        640: {
          slidesPerView: 2
          // spaceBetween: 20
        },
        // when window width is <= 1024px - large
        1024: {
          slidesPerView: 2
          // spaceBetween: 20
        }
      }
    })

    // Fade in the swiper arrow buttons.
    $('.banner-swiper-block').hover(function () {
      var selector = $('.swiper-arrow')
      $(selector).fadeIn('fast')
    }, function () {
      var selector = $('.swiper-arrow')
      $(selector).fadeOut('fast', function () {
      })
    })
  }
}

export { SwipeImage as default }
