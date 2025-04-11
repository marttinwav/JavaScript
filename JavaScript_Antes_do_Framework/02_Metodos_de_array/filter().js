// O método filter() cria um novo array com todos os elementos que passaram na condição.

const words = ["JavaScript", "HTML", "CSS", "Web"]

//Filtrando palavbras com mais de 3 letras.
const result = words.filter((word)=> word.length > 3)
console.log(result) // ["JavaScript", "HTML"]


const products = [
    {description: "Teclado", price: 150, promotion: true},
    {description: "Mouse", price: 50, promotion: false},
    {description: "Monitor", price: 250, promotion: true},
]
// exemplo de um filtro de produtos na promoção.
const promotion = products.filter((product) => product.promotion === true)
console.log(promotion) // [{description: "Teclado", price: 150, promotion: true}, {description: "Monitor", price: 250, promotion: true}]

