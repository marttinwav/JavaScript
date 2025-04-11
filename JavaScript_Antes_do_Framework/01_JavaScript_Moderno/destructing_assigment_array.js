// destructing assignment (desestruturação) permite xtrair dados de arrays ou objetos em variáveis distintas

const data = ["Martin Junior", "osmar@email.com"]

// Desestruturação de array
const [username, email] = data
console.log(username, email)

const fruits = ["Banana", "Maçã", "Laranja"]
const [fruit1, fruit2, fruit3] = fruits
console.log(fruit1, fruit2, fruit3)
//Desestruturando somente o primeiro
const [banana] = fruits
console.log(banana)
// Ignorando o primeiro e o segundo na desestruturação
const [, , orange] = fruits
console.log(orange)