// Função que retorna um promise.

function asyncFunction(){
    return new Promise((resolve, reject)=>{
        // Simulação de uma operação assíncrona
        setTimeout(()=>{
        const isSuccess = true; // Simulando sucesso ou falha
        if(isSuccess){
            resolve("Operação concluída com sucesso!");
        } else {
            reject("Erro na operação!");
        }
    },3000)
})
}
// Visualizando que o retorno é uma promise.

asyncFunction().then((response)=>{
    console.log("Sucesso:",response); // Operação concluída com sucesso!
}
).catch((error)=>{
    console.log("Erro:",error); // Erro na operação!
})
.finally(()=>{
    console.log("Operação finalizada!"); // Operação finalizada!
})