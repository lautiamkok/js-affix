'use strict'

import $ from 'jquery'

// Adjust the margin of each dropdown menu so it is centred.
var adjustDropDown = () => {
  var fixed = 200
  $('.navbar-items > li > a').not('.language').each(function (index) {
    var thisWidth = $(this).outerWidth(true)
    var calc = (fixed - thisWidth) / 2
    $(this).siblings('ul').css('margin-left', -calc)
  })
}

export default adjustDropDown
