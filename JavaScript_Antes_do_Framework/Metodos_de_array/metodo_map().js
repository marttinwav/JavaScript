// O método map() chama a função callback uma vez para cada elemento presente no array, na ordem correta, e constrói um novo array com os resultados. O valor de this dentro da função callback é indefinido por padrão. Caso você queira alterar isso, você pode passar um segundo argumento para o método map().

// O método map() não executa a função callback para os elementos que não possuem valor. Ou seja, se o elemento for undefined, o método não irá executar a função callback.

const products = ["Teclado", "Mouse", "Monitor"]
// perconrrendo os items do Array
products.map((product)=>{
    console.log(product) // "Teclado", "Mouse", "Monitor"
    
})

// Sintaxe reduzida.
products.map((product) => console.log(product))


// Utilizando o novo objeto retornado.

const formatted = products.map((product)=> {
    //return product.toUpperCase()

    return {
        id: Math.random(),
        description: product,
    }
})

console.log(formatted) // ["TECLADO", "MOUSE", "MONITOR"]