let sumarLento=(numero)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(numero+1),800);
    });
}

let sumarRapido=(numero)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(numero+1), 300);
        reject('Algo anda mal');
    })
}
Promise.all([sumarLento(5), sumarRapido(10)])
.then(respuesta=>{
    console.log(respuesta);
})
//sumarLento(5).then(console.log);
//sumarRapido(10).then(console.log);