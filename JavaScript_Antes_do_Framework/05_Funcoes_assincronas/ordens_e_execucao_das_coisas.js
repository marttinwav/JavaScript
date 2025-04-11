// eventloop - Executa po código de forma sícrona e o valor 1 e 4 é impresso imediatamente no console.
// Em seguida, a função queueMicrotask é chamada, que adiciona uma tarefa à fila de microtarefas.
// A função setTimeout é chamada, que adiciona uma tarefa à fila de tarefas.

console.log(1); // 1
// Microtasks são executadas antes de temporizadores e promessas
queueMicrotask(()=>{
    console.log(2); // 2
})
// a ultima coisa a ser executada - uma macrotask.
setTimeout(()=>{
    console.log(3); // 3
}, 2000)

console.log(4); // 4

//Adiciona uma microtask.
Promise.resolve(true).then(()=>{
    console.log(5); // 5
})