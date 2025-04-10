// spread (espalhar) permite que um objeto iteravel (array, string, etc) seja expandido em lugares onde zero ou mais argumentos (para chamadas de função) ou elementos (para arrays literais) são esperados.

const numbers = [1,2,3,4,5]
console.log(numbers) // 1 2 3 4 5

// spread
console.log(...numbers) // 1 2 3 4 5

const data = [
    {
        name: "Marttin",
        email: "martin@email.com",
        avatar: "r.png"
    },
    {
        name: "Junior",
        email: "junior@email.com",
        avatar: "r.png"
    }

]

console.log(data)
console.log(...data) // utilizando spread no array com objetos.