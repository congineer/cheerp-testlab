// A basic Cheerp WASM test needs no more that a WASM file loader from JavaScript.
// Hence, the buttonsInit callback can be left empty
// The C++ code for a basic test was adopted from the following Cheerp Wiki pages:
// https://github.com/leaningtech/cheerp-meta/wiki/Browser-side-programming-guide#even-more-cheerpcallback-buttons--mouse
// https://raw.githubusercontent.com/wiki/leaningtech/cheerp-meta/tutorials/dom_buttons/buttons.cpp
export default function buttonsInit () {
  console.log('Init a basic Cheerp WebAssebly test...')
}
