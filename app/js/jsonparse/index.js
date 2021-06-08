/* global jsonparse */ // callables from Cheerp wasm
import * as jsondiffpatch from 'jsondiffpatch'
import initReadData from './initReadData' // works on second start click
// ASK: // WHY: same data produced by curried funcs does not work at all
// import initReadData from './initReadData/index_curried' // same data produced by curried funcs

export default function jsonparseInit () { // CASE (A): sync
// export default async function jsonparseInit () { // CASE (B): async

  // Generate fake database test data
  const data = initReadData() // CASE (A): sync
  // const data = await initReadData() // CASE (B): async

  // Sync read data handler
  function readRecordFromDatabase (id) {
    const doc = data[id] || {}
    console.log('--> readRecordFromDatabase ID:', id, '\n--> DOC:', doc)
    return JSON.stringify(doc) // pass data as string to wasm
  }

  // Sync write data handler
  function writeRecordToDatabase (id, docStr) {
    const doc = JSON.parse(docStr)
    // delete doc._id // for debugging, i.e. to test JSON delta below
    // delete doc.$data[2] // for debugging, i.e. to test JSON delta below
    console.log('<-- writeRecordToDatabase ID:', id, '\n<-- DOC:', doc)

    // Hope there is no difference between original and returned doc
    const guaranteedChangeInWasm = { tested: 'yes' } // added to every parsed object in wasm
    const delta = jsondiffpatch.diff({ ...data[id], ...guaranteedChangeInWasm }, doc)
    // console[delta ? 'warn' : 'info'](`${delta ? '!!!' : '_i_'} Read<->Write doc delta:`, delta)
    console.assert(delta === undefined, { delta, Error: 'Read and Write database records do not match!' })
  }

  // Expose js globals for wasm
  window.readRecordFromDatabase = readRecordFromDatabase
  window.writeRecordToDatabase = writeRecordToDatabase

  // Test call here for debugging, i.e. it should be called from wasm instead
  // window.readRecordFromDatabase('test') // there is a DOC with ID 'test' in initData
  // window.writeRecordToDatabase('test', JSON.stringify(data.test)) // there is a DOC with ID 'test' in initData

  // Init test on Cheerp side
  try { // jsonparse exported from Cheerp, so add it as an ESLint global above
    jsonparse.promise.then(() => jsonparse(Object.keys(data))) // CASE (A): sync
    // await jsonparse.promise; jsonparse(Object.keys(data)) // CASE (B): async
  } catch (err) {
    console.error('!!! Catch from jsonparseInit:jsonparse', err)
  }
}
