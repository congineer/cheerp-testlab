// Some curry please
export default (func) => function curried (...args) {
  return args.length >= func.length // check if enough arguments given
    ? func(...args) // execute omitting excessive arguments
    : (...nextArgs) => curried(...args, ...nextArgs) // partial till all args given
}
