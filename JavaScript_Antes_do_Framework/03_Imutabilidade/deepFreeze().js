// Deep freeze

const book = {
    title: "Objetos imutaveis",
    category: "Javascript",
    author: {
        name: "Juliano",
        email: "juliano@email.com"
    }
}

function deepFreeze(obj) {
    // obtém um array com todas as propriedades do objeto.
   const props = Reflect.ownKeys(obj)
    // itera sobre todas as propriedades do objeto
    for(const prop of props){
        // Obtém o valor associado a propriedade atual.
        const value = obj[prop]
        // verifica se a propriedade é um objeto ou função para continuar aplicando o deepFreeze em objetos aninhados.
        if (value && typeof value === 'object' || typeof value === 'function') {
            deepFreeze(value)
        }
    }

    // Retorna o objeto congelado.
    return Object.freeze(obj)
}
// Chama a função deepFreeze passando o objeto book como argumento.
deepFreeze(book)

book.category = "HTML"

console.log(book)