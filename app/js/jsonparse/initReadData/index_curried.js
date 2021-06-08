// Original test object for cheerp > nlohmann JSON string array parse cases
import getManualTestData from './getManualTestData'
// Make all arrays in object x-times bigger via adding primitives: int, double
import expandArraysInObject from './expandArraysInObject'
// Actual real project document that should be parsed by nlohmann JSON string parser
// IMPORTANT: this is THE GOAL of these test cases -> real document should parse in nlohmann
import realDoc from './jsonData/realDoc.json'
// CASE (A): import here for sync assignment below
// import nlohmannJsonTestData from './nlohmann_json_test_data'

// Get fake SYNC test data as if it came from an ASYNC database
export default function initReadData () { // CASE (A): sync
// export default async function initReadData () { // CASE (B): async

  console.time('TIME: initReadData()')

  // Reducers for derived data generators
  const arrToObjReducer = (e, acc) => ({ ...acc, ...e }) // reduce arr to object

  // Curries
  const newArrCurry = (mapFn) => (size) => Array.from(Array(size), mapFn)
  const newObjCurry = (mapFn) => (size) => Array.from(Array(size), mapFn)
    .reduce(arrToObjReducer, {})
  const randomIntCurry = (min, max) => () => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) // [min, max + 1) = [min, max]
  }

  // Random type mapping functions
  const randomBoolMap = () => !Math.round(Math.random()) // random true / false
  const random3DigitIntMap = randomIntCurry(100, 999)
  const randomNumMap = (e = random3DigitIntMap(), i) => i % 2 ? e : e / 100 // int / double
  const randomStrMap = (e = random3DigitIntMap()) => `str${e}` // fast random string
  const randomObjMap = (e = random3DigitIntMap(), i) => ({ // fast random key / value pair
    [`key${e}`]: !(i % 2)
      ? `val${e}` // %2 are string
      : !(i % 3)
          ? e / 100 // remaining entries %3 are double
          : !(i % 5)
              ? e // remaining entries %5 is integer
              : !!(i % 7) // convert remaining entries to bool alternating at %7
  })

  // Simple random data generators
  const intArr = newArrCurry(random3DigitIntMap) // arr of random 3 digit ints
  const boolArr = newArrCurry(randomBoolMap) // arr of random bools
  const numArr = newArrCurry(randomNumMap) // arr of alternate ints with doubles
  const strArr = newArrCurry(randomStrMap) // arr of prepended and stringified 3 digit ints
  const objArr = newArrCurry(randomObjMap) // arr of objects, each of a random key/value pair
  const obj = newObjCurry(randomObjMap) // simple object of a random key/value pairs
  // const obj = (size) => objArr(size).reduce(arrToObjReducer, {})

  // Simple objects of i elements, i-1 with simle values, ith value as large obect
  const nested1LevelObj = (size) => !size
    ? obj(1) // fallback for i = 0, i.e. leave first element as primitive key/value
    : {
        ...obj(size - 1), // i - 1 key/value pairs are primitives, e.g. bool, number, string
        [`key${random3DigitIntMap()}`]: { ...obj(size - 1) } // ith value is i - 1 large object
      }
  const nestedDeepObj = (size) => !size
    ? obj(1) // fallback for i = 0, i.e. leave first element as primitive key/value
    : {
        ...obj(size - 1), // i - 1 key/value pairs are primitives, e.g. bool, number, string
        [`key${random3DigitIntMap()}`]: { ...nestedDeepObj(size - 1) }// recurse ith value
      }

  // Mapping functions for derived nested data structure
  const nested1LevelObjMap = (e, i) => nested1LevelObj(i)
  const nestedDeepObjMap = (e, i) => nestedDeepObj(i)

  // Array of simple objects of i elements, i-1 with simle values, ith value as large object
  const nested1LevelObjArr = newArrCurry(nested1LevelObjMap)
  const nestedDeepObjArr = newArrCurry(nestedDeepObjMap)

  // const logger = (size) => console.log(
  //   'intArr', intArr(size),
  //   '\nnumArr', numArr(size),
  //   '\nstrArr', strArr(size),
  //   '\nobjArr', objArr(size),
  //   `\nobj(${size})`, obj(size),
  //   `\nnested1LevelObj(${size})`, nested1LevelObj(size),
  //   `\nnestedDeepObj(${size})`, nestedDeepObj(size),
  //   '\nnested1LevelObjArr', nested1LevelObjArr(size),
  //   '\nnestedDeepObjArr', nestedDeepObjArr(size)
  // )
  // logger(10) // debug log data examples

  const initReadData = {
    // NOTE: Example that fails on first run=click after page load, but runs on 2nd and consecutive clicks,
    // i.e. other examples crash app if run as first click after page load, but can run stable if clicked
    // after the 2nd "stable test" run has been performed on page load.
    curry_generated_data_NOT_stable_after_page_load_objArr7: {
      _id: 'curry_generated_data_NOT_stable_after_page_load_objArr7', $data: objArr(7)
    },

    intArr10: { _id: 'intArr10', $data: intArr(10) }, // works
    intArr100k: { _id: 'intArr100k', $data: intArr(1e5) }, // works ~35 times till app crash
    intArr1M: { _id: 'intArr1M', $data: intArr(1e6) }, // works ~3-4 times till app crash

    numArr10: { _id: 'numArr10', $data: numArr(10) }, // works
    numArr100k: { _id: 'numArr100k', $data: numArr(1e5) }, // works ~35 times till app crash
    numArr1M: { _id: 'numArr1M', $data: numArr(1e6) }, // works ~3-4 times till app crash

    boolArr10: { _id: 'boolArr10', $data: boolArr(10) }, // works
    boolArr17: { _id: 'boolArr17', $data: boolArr(17) }, // crash
    boolArr27: { _id: 'boolArr27', $data: boolArr(27) }, // crash
    // boolArr100k: { _id: 'boolArr100k', $data: boolArr(1e5 }, // crash
    // boolArr1M: { _id: 'boolArr1M', $data: boolArr(1e6) }, // crash

    strArr7: { _id: 'strArr7', $data: strArr(7) }, // works
    strArr17: { _id: 'strArr17', $data: strArr(17) }, // parse works, but return data is corrupted
    strArr27: { _id: 'strArr27', $data: strArr(27) }, // parse works, but return data is corrupted
    strArr7Expanded: { _id: 'strArr7Expanded', $data: expandArraysInObject(strArr(7)) }, // data is corrupted
    strArr17Expanded: { _id: 'strArr17Expanded', $data: expandArraysInObject(strArr(17)) }, // data is corrupted
    strArr27Expanded: { _id: 'strArr27Expanded', $data: expandArraysInObject(strArr(27)) }, // crash
    // strArr100k: { _id: 'strArr100k', $data: strArr(1e5) }, // crash
    // strArr1M: { _id: 'strArr1M', $data: strArr(1e6) }, // crash

    obj7: { _id: 'obj7', $data: obj(7) }, // works
    obj17: { _id: 'obj17', $data: obj(17) }, // works
    obj27: { _id: 'obj27', $data: obj(27) }, // works
    // obj100: { _id: 'obj100', $data: obj(1e2) }, // DevTools hang on 1st "stable test" run
    // obj1k: { _id: 'obj1k', $data: obj(1e3) },
    // obj100k: { _id: 'obj100k', $data: obj(1e5) },
    // obj1M: { _id: 'obj1M', $data: obj(1e6) },

    objArr7: { _id: 'objArr7', $data: objArr(7) }, // works
    objArr17: { _id: 'objArr17', $data: objArr(17) }, // crash
    objArr27: { _id: 'objArr27', $data: objArr(27) }, // crash
    // objArr100k: { _id: 'objArr100k', $data: objArr(1e5) }, // crash
    // objArr1M: { _id: 'objArr1M', $data: objArr(1e6) }, // crash

    // IMPORTANT: Three below tests work. But, if commented out, not a single working test above will run!
    nested1LevelObj7: { _id: 'nested1LevelObj7', $data: nested1LevelObj(7) }, // works
    nested1LevelObj17: { _id: 'nested1LevelObj17', $data: nested1LevelObj(17) }, // works
    nested1LevelObj27: { _id: 'nested1LevelObj27', $data: nested1LevelObj(27) }, // works

    nestedDeepObj7: { _id: 'nestedDeepObj7', $data: nestedDeepObj(7) }, // works
    nestedDeepObj17: { _id: 'nestedDeepObj17', $data: nestedDeepObj(17) }, // works
    nestedDeepObj27: { _id: 'nestedDeepObj27', $data: nestedDeepObj(27) }, // works
    // nestedDeepObj100: { _id: 'nestedDeepObj100', $data: nestedDeepObj(1e2) }, // works

    // nestedDeepObj1k: { _id: 'nestedDeepObj1k', $data: nestedDeepObj(1e3) }, // init too long
    // nestedDeepObj10k: { _id: 'nestedDeepObj10k', $data: nestedDeepObj(1e4) }, // init too long
    // nestedDeepObj100k: { _id: 'nestedDeepObj100k', $data: nestedDeepObj(1e5) },
    // nestedDeepObj1M: { _id: 'nestedDeepObj1M', $data: nestedDeepObj(1e6) },

    nested1LevelObjArr7: { _id: 'nested1LevelObjArr7', $data: nested1LevelObjArr(7) }, // works
    nested1LevelObjArr17: { _id: 'nested1LevelObjArr17', $data: nested1LevelObjArr(17) }, // crash
    nested1LevelObjArr27: { _id: 'nested1LevelObjArr27', $data: nested1LevelObjArr(27) }, // crash

    nestedDeepObjArr7: { _id: 'nestedDeepObjArr7', $data: nestedDeepObjArr(7) }, // crash
    nestedDeepObjArr17: { _id: 'nestedDeepObjArr17', $data: nestedDeepObjArr(17) }, // crash
    nestedDeepObjArr27: { _id: 'nestedDeepObjArr27', $data: nestedDeepObjArr(27) }, // crash

    ...getManualTestData(), // two manual objects: one breaking, and one passing nlohmann parse
    // Selected JSON files from nlohmann test suite (https://github.com/nlohmann/json_test_data)
    // Uncomment Nlohmann tests when previous examples work.
    // These JSONs are big and take 5-10s to ipmort. Hence, not optimal for fast app reloading.
    // ...nlohmannJsonTestData, // CASE (A): sync (has to me imported above)
    // ...(await import('./nlohmann_json_test_data')).default, // CASE (B): async (not need for import above)
    realDoc // IMPORTANT: debug Cheerp build till this real doc is correctly parsed by nlohmann
  }
  console.log('FAKE SYNC CLIENT DATABASE DOCS', initReadData) // real client DB is Async, not sync

  console.timeEnd('TIME: initReadData()')

  return initReadData
}
