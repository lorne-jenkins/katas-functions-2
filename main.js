function add(a, b) {
    let result = a + b
    return result
}
function multiply(a, b) {
    let result = a
    for (i = 1; i < b; i++) {
        result = add(result, a)
    }
    return result
}
console.log('Second step:', multiply(3, 4))
console.log('Second step:', multiply(6, 4))
console.log('Second step:', multiply(5, 4))

function power(x, n) {
    let result = x
    for (let index = 1; index < n; index++) {
        result = multiply(result, x)
    }
    return result
}
console.log('Exponent example', power(2, 8))
console.log('Exponent example', power(5, 1))
console.log('Exponent example', power(3, 2))

function factorial(x) {
    let factorialFactor = x
    for (index = 1; index < x; index++) {
       factorialFactor = multiply(factorialFactor,add(x,-index))
    }
    return factorialFactor
}
console.log('Factorial:', factorial(3))
console.log('Factorial:', factorial(5))
console.log('Factorial:', factorial(6))

function Fibonacci(x) {
if (x <=2) {
    return add(x,-1)
} else {
    let fNminus1 = 1
    let fNminus2 = 0
    let fN
    for (let index = 0 ; index <add(x,-2); index++) {
        fN = add(fNminus1,fNminus2)
        fNminus2 = fNminus1
        fNminus1 = fN
        // console.log(fN)
    }
    return fN
}
 
}
console.log('Fibonacci',Fibonacci(8))

// console.log('Fibonacci:', Fibonacci(1))
// console.log('Fibonacci:', Fibonacci(2))
// console.log('Fibonacci:', Fibonacci(3))
// console.log('Fibonacci:', Fibonacci(4))
// console.log('Fibonacci:', Fibonacci(5))
// console.log('Fibonacci:', Fibonacci(6))
// console.log('Fibonacci:', Fibonacci(7))
// console.log('Fibonacci:', Fibonacci(8))
// console.log('Fibonacci:', Fibonacci(9))
// console.log('Fibonacci:', Fibonacci(10))
// console.log('Fibonacci:', Fibonacci(11))
// console.log('Fibonacci:', Fibonacci(12))