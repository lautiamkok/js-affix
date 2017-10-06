'use strict'

// Import node modules.
import DocReady from 'es6-docready'
import Foundation from 'foundation-sites'
import $ from 'jquery'

// Import custom modules.
// You need to import modules with './' because they don't reside in node_modules.
import SwipeImage from './SwipeImage'
import { getZFcurrentMediaQuery } from './utils'
import scrollUp from './scrollUp'
import adjustDropDown from './adjustDropDown'
import affix from './affix'
import aside from './aside'
import search from './search'
import scrollbarCustom from './scrollbarCustom'

// Must wait until DOM is ready before initiating the modules.
// ES6 doc ready.
// https://www.npmjs.com/package/es6-docready
DocReady(() => {
  console.log("DOM is ready. Let's party")
  $(document).foundation()

  let swiper = new SwipeImage()

  adjustDropDown()
  scrollUp()
  affix()
  aside()
  search()
  scrollbarCustom()

  window.addEventListener('resize', () => {
    var current = getZFcurrentMediaQuery()
    console.log('Screen size: ' + current)
  })

  // https://stackoverflow.com/questions/10328665/how-to-detect-browser-minimize-and-maximize-state-in-javascript
  document.addEventListener('visibilitychange', () => {
    console.log(document.hidden, document.visibilityState)
  }, false)
})
