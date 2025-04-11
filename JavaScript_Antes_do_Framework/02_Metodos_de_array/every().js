// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Retorna true ou false.

// Exemplo de array de idades...

const ages = [18, 20, 25, 30, 40]
// Verificando se todas as idades são maiores que 18.
const allAdults = ages.every((age) => age >= 18) // true
console.log(allAdults) // true