'use strict'

import $ from 'jquery'

// https://www.npmjs.com/package/perfect-scrollbar
import Ps from 'perfect-scrollbar'

// Add PS scrollbar.
export default function scrollbarCustom () {
  // Add scrollbar to the overlay.
  var container = document.getElementById('ps-scrollbar')
  // console.log(container)

  $('.scrollbar-container').bind('down.zf.accordionMenu', function (e, target) {
    console.log('accordionMenu is down')

      // Destroy the scrollbar first.
    Ps.destroy(container)
    Ps.initialize(container, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    })
  })

  $('.scrollbar-container').bind('up.zf.accordionMenu', function (e, target) {
    console.log('accordionMenu is up')

      // Destroy the scrollbar first.
    Ps.destroy(container)
    Ps.initialize(container, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    })
  })
}
