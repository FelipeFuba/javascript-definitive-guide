const reverseSignal = (n) => -1 * n
const squareRootOf = (n) => Math.sqrt(n)
const square = (n) => n * n
const delta = (a, b, c) => square(b)-(4*a*c)
const rootOf = (delta) => (delta => 0) ? squareRootOf(delta) : false
const returnRoot = (a, b, c) => [(reverseSignal(b) + square(delta(a, b, c)))/ 2 * a, (reverseSignal(b) - square(delta(a, b, c))) / 2 * a ]
const calculateBhaskara = (a, b, c) => (delta(a, b, c) >= 0) ? returnRoot(a, b, c) : false
const result = calculateBhaskara( -5, 3, 2)

console.log('result', result) // [-5995, 6010]