// O metodo some() testa se um dos elementos no array passa na condição e retorna um valor true ou false.

// Exemplo de arryas de idades

const ages = [15, 20, 25, 30, 35]

// verificando se é menor que 18.

const isAdult = ages.some((age) => age < 18)
console.log(isAdult) // true