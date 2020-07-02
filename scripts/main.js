// create a 'calculator' function which accepts 
// two numbers and a callback function which will
// some math (add, multiply) on those two numbers

function calculator (x,y, equipment){
    const output = equipment(x,y)
    return output
}

function add (x,y){
    return x + y
}

function multiply (x,y){
    return x * y
}

function divide (x,y){
    return x / y
}


const addOutput = calculator(1,2,add)
const multipyOutput = calculator(1,2,multiply)
const divideOutput = calculator (1,2,divide)

console.log({addOutput,multipyOutput,divideOutput})

console.assert(addOutput === 3, 'Additon expected 3')
console.assert(multipyOutput === 2, 'Multiplicaton expected 2')
console.assert(divideOutput === 0.5, 'Division expected 0.5')