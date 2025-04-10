/* 
    O método reduce é utilizado para reeduzir um array a um único valor.

    Parâmetros:
    - Array original (values)
    - Acumulador (accumulator)
    - Valor da iteração (currentValue)
    - Valor inicial (0)
    - Índice atual (index)
*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("Acumulador", accumulator, currentValue)
    console.log("INDEX: ", index)

    return accumulator + currentValue

}, 0)

console.log("Resultado da soma final: ", sum) // 15