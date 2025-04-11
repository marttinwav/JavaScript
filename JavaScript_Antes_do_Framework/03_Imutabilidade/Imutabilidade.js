const address1 = {
    street: "Av. Brasil",
    number: 20,

}

// const address2 = address1
// address2.number = 30
// criando um novo objeto utilizando as propriedade e valores de address1 (opção 1)
// const address2 = Object.assign({}, address1)
// criando um novo objeto utilizando as propriedade e valores de address1 (opção 2)
// const address2 = Object.assign({number: 10}, address1)

const address2 = {...address1}
address2.number = 30
console.log(address1, address2)

// Exemplo Array
const list1 = ["Apple", "Banana"]
const list2 = [...list1]
list2.push("Orange")
console.log(list1, list2)