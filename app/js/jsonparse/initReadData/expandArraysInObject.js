// WARNING: Cheerp wasm compiler allocates memory reliably only for arrays with non-primitive entries of max size 5
// expand primitive examples: int 0,1,2.. , float 0.1, 0.2,...
// minimal array length to ignore before expand and fill: fallback to 5
// fill multiplier to allocate array size expansion: defaults to 2

export default function expandArraysInObject (obj, expandPrimitive = 0.1, minLength = 5, fillMultiplier = 2) {
  if (Array.isArray(obj)) { // recurse into array values
    // Recurse into array
    obj.forEach(e => expandArraysInObject(e, expandPrimitive, minLength, fillMultiplier))

    // Expand and fill array with primitives upon returning from recursion
    const length = obj.length
    if (length >= minLength) {
      const grownLength = length * fillMultiplier // grow array length
      obj.length += grownLength // grow array length
      obj.fill(expandPrimitive, length) // fill starting from position: length
    }
  } else if (obj !== null && typeof obj === 'object') { // recurse into object values
    Object.keys(obj).forEach(key => expandArraysInObject(obj[key], expandPrimitive, minLength, fillMultiplier))
  }

  // Explicit return is ususally not needed since arrays in object are modified in-place
  return obj // return for the case of a higher order function using this method
}
