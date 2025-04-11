// Método find() retorna o valor do primeiro elemento array que satisfazer a condição. Caso contrario, undefined é retornado.

const values = [5,12,8,130,44]

// Retorna o primeiro elemnto que é maior que 10.
const found = values.find((value) => value > 10)
console.log(found) // 12

// Exemplo com objetos
const fruits = [
    {name: "apples", quantity: 23},
    {name: "bananas", quantity: 25},
    {name: "oranges", quantity: 52},
]

const result = fruits.find((fruit) => fruit.name === "bananas")
console.log(result) // {name: "bananas", quantity: 25}