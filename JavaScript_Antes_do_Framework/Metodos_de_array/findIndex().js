// Meotodo findIndex() retorna o índice no array do primeiro elemento que satisfazer a czondição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste

const numbers = [1, 2, 3, 4, 5]

// Obtendo o terceiro indice que é maior que 3.
const index = numbers.findIndex((number) => number > 3) // 3
console.log(index) // 3
console.log(numbers[index]) // 4

// Exemplo de quando não encontra

console.log(numbers.findIndex((number) => number > 10)) // -1