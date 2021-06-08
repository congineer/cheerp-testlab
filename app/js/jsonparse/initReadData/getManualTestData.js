// Original test case that showed inconsistent nlohmann behaviour for parsing arrays from JSON string
// NOTE: arrays can - to some minor extent - be saved from crashing if expanded with numeric primitives,
// but some strings in array get corrupted
export default function getManualTestData () {
  // I will brake nlohmann JSON string parse
  const testArrNaked = ['116', '943', '234', '38793', '116', '943', '234', '38793', '116', '943', '234', '38793', '116', '943', '234', '38793', '116', '943', '234', '38793', '116', '943', '234', '38793']

  // I will NOT brake nlohmann JSON string parse. But I will CORRUPT some data starting from position > 6
  const testArrExpanded = ['116', '943', '234', '38793', '116', '943', '234', '38793', '116', '943', '234', '38793', '116', '943', '234', '38793', '116', '943', '234', '38793', '116', '943', '234', '38793', 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03, 1.01, 2.02, 3.03]

  // Original test object for nlohmann JSON string parse behaviour
  const testObject = {
    _id: 'DUMMY_TO_RESET_ON_EXPORT', // primitive key/value pairs
    _rev: 'DUMMY_$meta._rev',
    _key: 'DUMMY_$meta._key',
    // NOTE: add "testArr..." key-value in return statement below
    // testArrNaked, // BUG: the naked (= only-strings array) of size > 21 will break nlohmann parse
    // testArrExpanded, // WHY: string array can be saved from nlohmann break. // BUG: but it corrupts data
    $data: {
      Image: { // INFO: nlohmann repo example micro-object to start testing nlohmann parse from JSON string
        Width: 800,
        Height: 600,
        Title: 'View from 15th Floor',
        Thumbnail: {
          Url: 'http://www.example.com/image/481989943',
          Height: 125,
          Width: 100
        },
        Animated: false,
        // NOTE: there are cases for longer arrays (length>5),
        // i.e. with non-string entries, that do not brake nlohmann parse: ArrArr
        ArrArr: [[1], [1.02], ['1'], [{ a: 'b' }], [1], [1.02], ['1'], [{ a: 'b' }], [1], [1.02], ['1'], [{ a: 'b' }]],
        // NOTE: multiple nested objects do not brake nlohmann parse
        T01: { u: 'h', H: 125, W: 100 },
        T02: { u: 'h', H: 125, W: 100 },
        T03: { u: 'h', H: 125, W: 100 },
        T04: { u: 'h', H: 125, W: 100 },
        T05: { u: 'h', H: 125, W: 100 },
        T06: { u: 'h', H: 125, W: 100 },
        T07: { u: 'h', H: 125, W: 100 },
        T08: { u: 'h', H: 125, W: 100 },
        T09: { u: 'h', H: 125, W: 100 },
        T10: { u: 'h', H: 125, W: 100 },
        T11: { u: 'h', H: 125, W: 100 },
        T12: { u: 'h', H: 125, W: 100 },
        T13: { u: 'h', H: 125, W: 100 },
        T14: { u: 'h', H: 125, W: 100 },
        T15: { u: 'h', H: 125, W: 100 },
        T16: { u: 'h', H: 125, W: 100 },
        T17: { u: 'h', H: 125, W: 100 },
        T18: { u: 'h', H: 125, W: 100 },
        T19: { u: 'h', H: 125, W: 100 },
        T20: { u: 'h', H: 125, W: 100 },
        // NOTE: multiple nested 'good' arrays do not brake nlohmann parse
        T21: { u: 'h', H: 125, W: testArrExpanded },
        T23: { u: 'h', H: 125, W: testArrExpanded },
        T24: { u: 'h', H: 125, W: testArrExpanded },
        T25: { u: 'h', H: 125, W: testArrExpanded },
        T26: { u: 'h', H: 125, W: testArrExpanded },
        T27: { u: 'h', H: 125, W: testArrExpanded },
        T28: { u: 'h', H: 125, W: testArrExpanded },
        T29: { u: 'h', H: 125, W: testArrExpanded },
        T30: { u: 'h', H: 125, W: testArrExpanded },
        T31: { u: 'h', H: 125, W: testArrExpanded },
        T32: { u: 'h', H: 125, W: testArrExpanded },
        T33: { u: 'h', H: 125, W: testArrExpanded },
        T34: { u: 'h', H: 125, W: testArrExpanded },
        T35: { u: 'h', H: 125, W: testArrExpanded },
        T36: { u: 'h', H: 125, W: testArrExpanded },
        T37: { u: 'h', H: 125, W: testArrExpanded },
        T38: { u: 'h', H: 125, W: testArrExpanded },
        T22: { u: 'h', H: 125, W: testArrExpanded },
        T39: { u: 'h', H: 125, W: testArrExpanded },
        T40: { u: 'h', H: 125, W: testArrExpanded }
      }
    }
  }

  // Assemble fake SYNC test data as if it came frome an ASYNC database
  const idNaked = 'manualObjectWithTestArrNaked'
  const idExpanded = 'manualObjectWithTestArrExpanded'
  const testData = {
    [idExpanded]: { ...testObject, _id: idExpanded, testArrExpanded: testArrExpanded },
    [idNaked]: { ...testObject, _id: idNaked, testArrNaked: testArrNaked }
  }

  return testData
}
