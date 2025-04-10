// Criando um array com construtor

const newArray = new Array()
console.log(newArray)

const available = new Array(10)
console.log(available)

// criando e acessando um array

let fruits = ['banana', 'apple', 'orange', 'strawberry']
console.log(fruits[1])
console.log(fruits.length)
console.log(fruits[fruits.length - 1])

// convertendo uma string em array

let fullname = "Marttin Junior"
let nameArray = fullname.split(' ')
console.log(nameArray)

// cria um array com as letras.

console.log(Array.from(fullname))

// Adicionando e removendo itens em um array

let users = []
users.push('Marttin')
users.push('Junior')
console.log(users)
users.pop([1])
console.log(users)

// Usando o indice

let cars = ['Ferrari', 'Fusca', 'Palio', 'Celta']

let position = cars.indexOf('Palio')
console.log(position)

// Removendo itens com splice

let removedItem = cars.splice(1, 2)
console.log(removedItem)

// Adicionando itens com splice

cars.splice(1, 0, 'Gol', 'Uno')
console.log(cars)

// Quais elementos um array aceita?

let myArray = [
        1, 2, 3, 
        'Marttin', 
        true, 
    {
        name: 'Junior',
        email: "marttin@email.com"
    }, 
    function(){
        console.log('Função dentro do Array')
}]

console.log(myArray[5])
myArray[6]()
console.log(myArray[4].name)

// Verificando se existe um conteudo no array

let products = ['banana', 'apple', 'orange', 'strawberry']
console.log(products.includes('banana'))
console.log(products.includes('grape'))



let nomes = [
    "Caio Valentim",
    "Isadora Luz",
    "Miguel Castilho",
    "Lorena Vasconcelos",
    "Dante Ferreira",
    "Mariana Figueiredo",
    "Rafael Montenegro",
    "Tatiane Campos",
    "Gustavo Almeida",
    "Bianca Nogueira"
]

function verificarNomes() {
   const nomedeusuario = prompt("Digite o nome do usuário")
   if(nomes.includes(nomedeusuario)){
        alert("Seu nome está na lista!")
   } else {
        alert("Seu nome não está na lista!")
   }
}

verificarNomes()