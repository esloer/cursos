// promesas

let promesa = new Promise ((bien,mal)=>{
    let respuestaB="salio todo bien"
    let respuestaM="salio todo mal"
    bien(respuestaB)
    mal("salio todo mal")

})

// con .then se utiliza si a respondido correctamente

promesa.then(respuesta => {
    console.log(respuesta)
} ).catch(error=>{
    console.error(error)
})