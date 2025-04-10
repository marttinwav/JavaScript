// // Vizualizar o conteúdo do document.

// console.log(document)

// // Acessar o elemento pelo ID
// //const guest = document.getElementById("guest-2")
// console.log(guest)

// // Mostra as propriedades do objeto.
// console.dir(guest)

// // Acessar elemento com class (SELETOR class)
// const guestsByClass = document.getElementsByClassName("guest")
// console.log(guestsByClass)

// //Exibir o primeiro elemento da lista
// console.log(guestsByClass.item(0))
// console.log(guestsByClass[1])

// // Selecionar lista de elementos pela tag
// const guestsTag = document.getElementsByTagName("li")
// console.log(guestsTag)

// // Query Selector
// //Acessa o elemento pelo seletor ID

// //const guest = document.querySelector("#guest-2")
// console.log(guest)

// //Acessa o elemento pelo seletor class
// //const guests = document.querySelector(".guest")
// console.log(guests)

// //Retorna todos os elementos encontrados pelo query
// //const guests = document.querySelectorAll(".guest")
// console.log(guests)

// // Manipulando os elementos

// const guest = document.querySelector("#guest-1")
// console.log(guest.textContent) //retorna o conteudo como texto.

// //Alterando os estilos

// const input = document.querySelector("#name")
// //Adiciona a classe
// //input.classList.add("input-error")
// //Remove a classe
// input.classList.remove("input-error")
// // Se não tiver a classe adiciona, se tem, remove.
// input.classList.toggle("input-error")

// const button = document.querySelector("button")

// //Modifica as propriedades css do elemento.
// button.style.backgroundColor = "red"

// // Criando elementos

// const guests = document.querySelector("ul")
// console.log(guests)

// const newGuest = document.createElement("li")
// newGuest.classList.add("guest")
// const guestName = document.createElement("span")

// guestName.textContent = "Diego"

// const guestSurname = document.createElement("span")
// guestSurname.textContent = "Fernandes"


// // Adiciona após o ultimo filho
// //newGuest.append(guestName, guestSurname)

// //console.log(newGuest)

// // Adiciona antes do primeiro filho.
// //newGuest.prepend(guestSurname)

// // É mais simples que o append e aceita apenas um argumento.
// newGuest.appendChild(guestName)
// newGuest.appendChild(guestSurname)

// guests.append(newGuest)

// // Manipulando atributos

// //const input = document.querySelector("input")

// //input.setAttribute("disabled", true)

// //input.setAttribute("type", "file")

//Remover um atributo.
// //input.removeAttribute("id")

// // Eventos

// window.addEventListener("load", ()=> {
//   console.log("A pagina foi carregada")
// })

// addEventListener("click", (event)=>{
//   event.preventDefault()

//   console.log(event) // Retorna infomações do evento.

//   console.log(event.target) //Retorna o elemento clicado

//   console.log(event.target.textContent) // Retorna o textContet do elemento clicado.
// })

// // Eventos em um elemento específico.

// const ul = document.querySelector("ul")

// ul.addEventListener("scroll", ()=>{
//   console.log(ul.scrollTop)

//   if(ul.scrollTop>300)
//     //console.log("Fim da lista")

//     ul.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     })
// })

// const button = document.querySelector("button")
// button.addEventListener("click", (event)=>{
//   event.preventDefault()
//   console.log("CLICOU!")
// })

// // Eventos no formulário

// const form = document.querySelector("form")

// form.onsubmit = (event)=> {
//   event.preventDefault()
//   console.log("Voce fez submit no formulário #1")
// }
// form.onsubmit = (event)=> {
//   event.preventDefault()
//   console.log("Voce fez submit no formulário #2")
// }

// form.addEventListener("submit", (event)=> {
//   console.log("Voce fez submit no formulário #3")
// })
// form.addEventListener("submit", (event)=> {
//   console.log("Voce fez submit no formulário #4")
// })

// //Eventos em Input

//const input = document.querySelector("input")

// //keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, etc.)

// input.addEventListener("keydown", (event)=> {
//   console.log(event.key)
// })

// //Keypress - quando uma tecla do tipo caractere é pressionada (letras, numeros, pontos, etc.)
// input.addEventListener("keypress", (event)=> {
//   console.log(event.key)
// })

// input.onchange = () => {
//   inputChange()
// }

// function inputChange(){
//   console.log("O input mudou!!!!")
// }

// Manipulando input.

// const input = document.querySelector("input")
// const form = document.querySelector("form")

/*input.addEventListener("input", ()=>{
  const value = input.value
  const regex = /\D+/g

  
  //console.log(value.match(regex)) //Retorna o conteudo ou o padrão encontrado na string.
 //Testa se atende o padrao
  // const isValid = regex.test(value)
  // console.log(isValid)
})
*/
/*
form.addEventListener("submit", (event)=> {
  event.preventDefault()
  const value = input.value
  const regex = /\D+/g
  if(regex.test(value)){
    console.log(value)
  } else {
      alert("Valor inválido. Digite corretamente")
  }
  //const value = input.value.replace(regex, "")
  //console.log(value)
})
*/

const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (event)=> {
  event.preventDefault()

  const value = input.value
  const regexHasNumber = /\d+/g

  if(regexHasNumber.test(value)){
    alert("O texto contém número. Por favor, digite corretamente.")
  }else{
    alert("Cadastro enviado!")
  }


}


