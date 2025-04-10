const book = {
    title: "Objetos Imutaveis",
    category: "JavaScript",
    author : {
        name: "Diego Fernandes",
        email: "diego@email.com"
    }
}

// O javaScript em si não imões restrições á modificação dos objetos
book.category = "HTML"

Object.freeze(book)
book.category = "CSS" // NÃO MODIFICA

// o object.freeze() não impede a modificação de objetos aninhados(shalow freezing)
book.author.name = "Marcelo" // MODIFICA
console.log(book) // HTML