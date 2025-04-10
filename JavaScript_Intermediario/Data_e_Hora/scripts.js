// Obtendo Data e Hora.

console.log(new Date());

// Definindo uma data e hora específica.

console.log(new Date(2025, 8, 17, 14, 0)) // Define com ano, mês(0-11), dia, hora e minuto.

// Metodos pra trabalhar com data e hora.

let date = new Date("2025-02-17T14:00:00");

console.log(date.getDay()) // Retorna o dia da semana (0-6)(Domingo é 0).

// Dia do mês (0 à 30)
console.log(date.getDate());

// Mês (0 à 11)
console.log(date.getMonth());

// Ano
console.log(date.getFullYear());

// Hora
console.log(date.getHours());

// Minutos
console.log(date.getMinutes());

// Segundos
console.log(date.getSeconds());


// Modificando a data e hora.

let date1 = new Date("February 17, 2025 14:00:00");


// Modificando o ano.  
date1.setFullYear(2026);

// Modificando o mês.
date1.setMonth(11);

// Modificando o dia.
date1.setDate(25);

// Modificando a hora.
date1.setHours(20);

// Modificando os minutos.
date1.setMinutes(30);

console.log(date1);

//////////////////////

// Formatando uma data e hora.

let date2 = new Date("2025-02-17T14:00:00");

console.log(date2.getDate().toString().padStart(2, "0")) // Formata o dia ter 2 digitos.

console.log(date2.getMonth().toString().padStart(2, "0")) // Formata o mês ter 2 digitos.

let day = date2.getDate().toString().padStart(2, "0")
let month = date2.getMonth().toString().padStart(2, "0")

let year = date2.getFullYear()
let hour = date2.getHours()
let minutes = date2.getMinutes().toString().padStart(2, "0")

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`)


// Convertento uma data pra string.

let date3 = new Date("2025-02-17T14:00:00");

console.log(date3.toString());

console.log(date3.toDateString()); // Retorna somente a data.

console.log(date3.toTimeString()); // Retorna somente a hora.

// Exibindo data e hora em formato local.

console.log(date3.toLocaleString({
    timeZone: "America/Bogota"
}));

console.log(date3.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    
})
);

let amount = 123.45;

console.log(amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
}))

// Intl é a API de internacionalização do JavaScript.

const currentLocale = Intl.DateTimeFormat().resolvedOptions() // Obtém informações sobre o locale atual.

console.log(currentLocale)

console.log(new Intl.DateTimeFormat("pt-BR").format(date3)) // Formata a data e hora de acordo com o locale.




