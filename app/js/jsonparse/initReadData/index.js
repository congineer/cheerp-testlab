// Original test object for cheerp > nlohmann JSON string array parse cases
import getManualTestData from './getManualTestData'
// Make all arrays in object x-times bigger via adding primitives: int, float
import expandArraysInObject from './expandArraysInObject'
// Actual real project document that should be parsed by nlohmann JSON string parser
// IMPORTANT: this is THE GOAL of these test cases -> real document should parse in nlohmann
import realDoc from './jsonData/realDoc.json'
// CASE (A): import here for sync assignment below
// import nlohmannJsonTestData from './nlohmann_json_test_data'

// Get fake SYNC test data as if it came frome an ASYNC database
export default function initReadData () { // CASE (A): sync
// export default async function initReadData () { // CASE (B): async

  console.time('TIME: initReadData()')

  // Data generators
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) // [min, max + 1) = [min, max]
  }
  const getRandom3DigitInt = () => getRandomInt(100, 999)
  const intArr = (size) => Array.from(Array(size), getRandom3DigitInt)
  const boolArr = (size) => intArr(size).map(e => !Math.round(Math.random())) // random booleans
  const numArr = (size) => intArr(size).map((e, i) => i % 2 ? e : e / 100) // alternate int with float
  const strArr = (size) => intArr(size).map(e => `str${e}`) // prepend and stringify int
  const objArr = (size) => intArr(size).map((e, i) => ({
    [`key${e}`]: !(i % 2)
      ? `val${e}` // %2 are string
      : !(i % 3)
          ? e / 100 // remaining entries %3 are float
          : !(i % 5)
              ? e // remaining entries %5 is integer
              : !!(i % 7) // convert remaining entries to bool alternating at %7
  }))
  const numStrObj = (size) => objArr(size).reduce((e, acc) => ({ ...acc, ...e }), {})
  const nested1LevelNumStrObj = (size) => ({
    ...numStrObj(size - 1),
    [`key${getRandom3DigitInt()}`]: { ...numStrObj(size) }
  })

  const nestedDeepNumStrObj = (size) => !size
    ? {} // fallback
    : {
        ...numStrObj(size - 1),
        [`key${getRandom3DigitInt()}`]: { ...nestedDeepNumStrObj(size - 1) }
      }

  const nested1LevelNumStrObjArr = (size) => Array
    .from(Array(size), (e, i, a) => !i
      ? objArr(1)[0] // leave first element as primitive value
      : {
          ...numStrObj(i - 1), // i - 1 key/value pair are simple
          [`key${getRandom3DigitInt()}`]: { ...numStrObj(i) } // ith value is a simple object of size i
        } // add simple objects of i elements
    )

  const nestedDeepNumStrObjArr = (size) => size && Array
    .from(Array(size), (e, i, a) => nestedDeepNumStrObj(i))

  // const logger = (size) => console.log(
  //   'intArr', intArr(size),
  //   '\nnumArr', numArr(size),
  //   '\nstrArr', strArr(size),
  //   '\nobjArr', objArr(size),
  //   `\nnumStrObj(${size})`, numStrObj(size),
  //   `\nnested1LevelNumStrObj(${size})`, nested1LevelNumStrObj(size),
  //   `\nnestedDeepNumStrObj(${size})`, nestedDeepNumStrObj(size),
  //   '\nnested1LevelNumStrObjArr', nested1LevelNumStrObjArr(size),
  //   '\nnestedDeepNumStrObjArr', nestedDeepNumStrObjArr(size)
  // )
  // logger(10) // debug log data examples

  const initReadData = {
    // NOTE: Example that fails on first run=click after page load, but runs on 2nd and consecutive clicks,
    // i.e. other examples crash app if run as first click after page load, but can run stable if clicked
    // after the 2nd "stable test" run has been performed on page load.
    stable_on_2nd_run_after_page_load_objArr7: {
      _id: 'stable_on_2nd_run_after_page_load_objArr7', $data: objArr(7)
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
    // boolArr100k: { _id: 'boolArr100k', $data: boolArr(1e5) }, // crash
    // boolArr1M: { _id: 'boolArr1M', $data: boolArr(1e6) }, // crash

    strArr7: { _id: 'strArr7', $data: strArr(7) }, // works
    strArr17: { _id: 'strArr17', $data: strArr(17) }, // parse works, but return data is corrupted
    strArr27: { _id: 'strArr27', $data: strArr(27) }, // parse works, but return data is corrupted
    strArr7Expanded: { _id: 'strArr7Expanded', $data: expandArraysInObject(strArr(7)) }, // data is corrupted
    strArr17Expanded: { _id: 'strArr17Expanded', $data: expandArraysInObject(strArr(17)) }, // data is corrupted
    strArr27Expanded: { _id: 'strArr27Expanded', $data: expandArraysInObject(strArr(27)) }, // crash
    // strArr100k: { _id: 'strArr100k', $data: strArr(1e5) }, // crash
    // strArr1M: { _id: 'strArr1M', $data: strArr(1e6) }, // crash

    objArr7: { _id: 'objArr7', $data: objArr(7) }, // works
    objArr17: { _id: 'objArr17', $data: objArr(17) }, // crash
    objArr27: { _id: 'objArr27', $data: objArr(27) }, // crash
    // objArr100k: { _id: 'objArr100k', $data: objArr(1e5) }, // crash
    // objArr1M: { _id: 'objArr1M', $data: objArr(1e6) }, // crash

    numStrObj7: { _id: 'numStrObj7', $data: numStrObj(7) }, // works
    numStrObj17: { _id: 'numStrObj17', $data: numStrObj(17) }, // works
    numStrObj27: { _id: 'numStrObj27', $data: numStrObj(27) }, // works
    // numStrObj100: { _id: 'numStrObj100', $data: numStrObj(100) }, // DevTools hang on 1st "stable test" run
    // numStrObj1e3: { _id: 'numStrObj1e3', $data: numStrObj(1e3) },
    // numStrObj100k: { _id: 'numStrObj100k', $data: numStrObj(1e5) },
    // numStrObj1M: { _id: 'numStrObj1M', $data: numStrObj(1e6) },

    // IMPORTANT: Three below tests work. But, if commented out, not a single working test above will run!
    nested1LevelNumStrObj7: { _id: 'nested1LevelNumStrObj7', $data: nested1LevelNumStrObj(7) }, // works
    nested1LevelNumStrObj17: { _id: 'nested1LevelNumStrObj17', $data: nested1LevelNumStrObj(17) }, // works
    nested1LevelNumStrObj27: { _id: 'nested1LevelNumStrObj27', $data: nested1LevelNumStrObj(27) }, // works

    nestedDeepNumStrObj7: { _id: 'nestedDeepNumStrObj7', $data: nestedDeepNumStrObj(7) }, // works
    nestedDeepNumStrObj17: { _id: 'nestedDeepNumStrObj17', $data: nestedDeepNumStrObj(17) }, // works
    nestedDeepNumStrObj27: { _id: 'nestedDeepNumStrObj27', $data: nestedDeepNumStrObj(27) }, // works
    // nestedDeepNumStrObj100: { _id: 'nestedDeepNumStrObj100', $data: nestedDeepNumStrObj(1e2) }, // works

    // nestedDeepNumStrObj1k: { _id: 'nestedDeepNumStrObj1k', $data: nestedDeepNumStrObj(1e3) }, // init too long
    // nestedDeepNumStrObj10k: { _id: 'nestedDeepNumStrObj10k', $data: nestedDeepNumStrObj(1e4) }, // init too long
    // nestedDeepNumStrObj100k: { _id: 'nestedDeepNumStrObj100k', $data: nestedDeepNumStrObj(1e5) },
    // nestedDeepNumStrObj1M: { _id: 'nestedDeepNumStrObj1M', $data: nestedDeepNumStrObj(1e6) },

    nested1LevelNumStrObjArr7: { _id: 'nested1LevelNumStrObjArr7', $data: nested1LevelNumStrObjArr(7) }, // works
    nested1LevelNumStrObjArr17: { _id: 'nested1LevelNumStrObjArr17', $data: nested1LevelNumStrObjArr(17) }, // crash
    nested1LevelNumStrObjArr27: { _id: 'nested1LevelNumStrObjArr27', $data: nested1LevelNumStrObjArr(27) }, // crash

    nestedDeepNumStrObjArr7: { _id: 'nestedDeepNumStrObjArr7', $data: nestedDeepNumStrObjArr(7) }, // crash
    nestedDeepNumStrObjArr17: { _id: 'nestedDeepNumStrObjArr17', $data: nestedDeepNumStrObjArr(17) }, // crash
    nestedDeepNumStrObjArr27: { _id: 'nestedDeepNumStrObjArr27', $data: nestedDeepNumStrObjArr(27) }, // crash

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
