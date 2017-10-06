'use strict'

import $ from 'jquery'
import 'jquery-ui-bundle'

// Show/ hide menu search.
export default function search () {
  var buttonShowMenuSearch = $('.button-show-menu-search')
  var buttonHideMenuSearch = $('.button-hide-menu-search')
  var searchBlock = $('.search-block')

  buttonShowMenuSearch.on('click', function () {
    buttonShowMenuSearch.addClass('hide')

    searchBlock.fadeIn('fast', function () {
      // do something or nothing.
    })

    searchBlock.find('.menu-block-search').animate({
      height: 'toggle'
    },
     600,
    'easeOutExpo',
    function () {
      // do something or nothing.
    })

    return false
  })

  buttonHideMenuSearch.on('click', function () {
    buttonShowMenuSearch.removeClass('hide')

    searchBlock.find('.menu-block-search').animate({
      height: 'toggle'
    },
     600,
    'easeOutExpo',
    function () {
      // do something or nothing.
    })

    searchBlock.fadeOut('fast', function () {
      // do something or nothing.
    })

    return false
  })
}
