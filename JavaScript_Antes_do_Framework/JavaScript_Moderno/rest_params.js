// Rest params(...) permite representar um número indefinido de argumentos como um array

function values(...rest){
    console.log(...rest)
}

values(2,3,4,5,6,7)

function values2(...args){
    console.log(...args)
}

values2(2,3,4,5,6,7) // Outro exemplo de rest params