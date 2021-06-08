import fetchScript from './utils/fetchScript'

// IMPORT TEST CASES HERE VIA INDIVIDUAL UNCOMMENTING
// +++++++++++++++++++++++++++++++++++++++++++++++++++

import buttonsInit from './buttons'
fetchScript('cheerp/buttons/buttons.js', buttonsInit)

// import buttonsJsVersionInit from './buttonsJsVersion'
// setTimeout(buttonsJsVersionInit, 100) // after-DOM-loading to simulate 'fetchScript'
