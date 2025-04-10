/* 
  - Parametros: é a variável (escopo da função) que irá receber um valor em uma função.
  - Argumentos: é o valor que é passado para a função.
*/
function message (username){
  console.log("Olá, ", username)
}
message("Marttin")

function JoinText(a, b, c){
  console.log("Olá, ", a, b = "" ,c = "")
}

JoinText("Osmar Marttin")


function sum(a, b){
  console.log(a + b)
}

sum(1,0)

//RETORNANDO VALORES

function sum(a,b){
  let result = a + b
  
  return result
}

let response = sum(7,5)
console.log(response)

console.log(sum(7,8))

// ESCOPO DE FUNÇÃO


showMessage("Olá marttin")

function showMessage(message){
  console.log(message)
  endline()

  function endline(){
    console.log("---------")
  }
}

showMessage("Tudo bem?")


// Não existe nesse escopo.
// ----> endline() <---- Resulta em erro.

// Comentário de Documentação.
/*
  Comentário de documentação em JavaScript (sintaxe de JSDoc).
  O JSDoc é um padrão para incorporar documentação no código-fonte a 
  partir desses comentários.
*/

/**
 * 
 * @param {string} email user email.
 * @param {string} password more than 6 caractere.
 * @returns {number} id user
 */
function signIn(email, password){
  // Fluxo de autenticação do usuário.

  return 7
}

signIn("Osmar@gmail.com", "12345678")

// Função anônima (Função que não possui nome)
const showMessage1 = function(){
  return "Olá Marttin"
}

console.log(showMessage1())

let showMessage2 = function(message, name) {
  return message + name
}

console.log(showMessage2("Olá ", "Marttin"))

const showMessage3 = function(name){
  return "Olá, " + name
}

console.log(showMessage3("Marttin"))

// Arrow Function

const showMessage4 = () => {
  console.log("Olá")
}

console.log(showMessage4)
showMessage4()

const showMessage5 = (user, email) => {
  console.log(`Olá, ${user}. Seu e-mail é ${email}.`)
}

showMessage5("Marttin", "osmar@gmail.com")

// CALLBACK FUNCTION: é uma função passada para outra função como argumento.

function execute(taskname, callback){
  console.log("Executando a tarefa: ", taskname)

  callback()
}

function callback(){
  console.log("Tarefa finalizada.")
}

//Passando para a função.

execute("Download do arquivo...", callback)

// Criando a função no próprio parâmetro(função anônima).

execute("Upload do arquivo...", function(){
  console.log("Função de callback com uma função anônima.")
})

// Utilizando arrow funciontions

execute("Excluindo o arquivo...", ()=>{
  console.log("Arquivo excluido!")
})

execute("Salvando o arquivo...", ()=> console.log("Arquivo salvo!!"))