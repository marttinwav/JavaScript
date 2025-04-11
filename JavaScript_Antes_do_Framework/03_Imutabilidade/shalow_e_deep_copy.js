// Shalow Copy (cópia superficial): não pega os itens aninhados.

const htmlCourse = {
    couse: "HTML",
    students: [{name: "Marttin", email: "martin@email.com"}]
}
/*
const jscourse = {
    ...htmlCourse,
    couse: "JavaScript",
}*/

// Vai modificar o htmlcourse também pq students é uma referencia e não uma cópia.
//jscourse.students.push({name: "Joao", email: "joao@email.com"})


// Deep copy (cópia profunda): pega os itens aninhados.
/*
const jscourse = {
    ...htmlCourse,
    course: "JavaScript",
    students:[...htmlCourse.students, ]
}
*/

const jscourse = {
    ...htmlCourse,
    course: "JavaScript",
}

jscourse.students = [
    ...htmlCourse.students,
    {name: "Kiop", email: "kiop@email.com"}
]
jscourse.students.push({name: "Joao", emai: "Joao@email.com"})
console.log(htmlCourse);
console.log(jscourse);