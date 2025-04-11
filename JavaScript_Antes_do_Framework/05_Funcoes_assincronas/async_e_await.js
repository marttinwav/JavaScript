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

async function fetch(){
    const response = await asyncFunction()
    console.log(response); // Promise { <pending> }
}

fetch()