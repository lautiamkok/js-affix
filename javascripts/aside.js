'use strict'

import $ from 'jquery'
import 'jquery-ui-bundle'

// Show/ hide menu mobile/ aside.
export default function aside () {
  var buttonShowMenuMobile = $('.button-show-menu-mobile')
  var buttonHideMenuMobile = $('.button-hide-menu-mobile')
  var aside = $('.navbar-aside')

  buttonShowMenuMobile.on('click', function () {
    buttonShowMenuMobile.addClass('hide')

    aside.fadeIn('fast', function () {
      // do something or nothing.
    })

    aside.find('.menu-block-aside').animate({
      width: 'toggle'
    },
     600,
    'easeOutExpo',
    function () {
      // do something or nothing.
    })

    return false
  })

  buttonHideMenuMobile.on('click', function () {
    buttonShowMenuMobile.removeClass('hide')

    aside.find('.menu-block-aside').animate({
      width: 'toggle'
    },
     600,
    'easeOutExpo',
    function () {
      // do something or nothing.
    })

    aside.fadeOut('fast', function () {
      // do something or nothing.
    })

    return false
  })
}
