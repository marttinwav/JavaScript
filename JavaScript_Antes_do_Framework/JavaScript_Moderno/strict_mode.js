// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no Javascript.

//"use strict"
function showMessage(params) {


    personName = "Martin Junior"

    console.log("Hello ", personName)
}
showMessage()

class Student {
    get point() {
        return 7
    }
}

let student = new Student()
//student.point = 10

console.log(student.point)

function sum(a,b,c) {
    return a + b + c
}

// Se tem um parametro duplicado ele sobrepõe o primeiro valor
function sum(a,a,c) {
    return a + a + c
}