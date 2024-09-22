// Los objetos tine informacion que se puede acceder a ellos cuando sea preciso . Su estructura es como si fuera una variable o un constante un = seguido de las { y dentro de estas ponemos clave:valor,} 

let coche1 = {
    marca:"peugeot",
    modelo:208,
    color:"negro",
    peso:"1000kg"
}

const coche2 = {
    marca:"seat",
    modelo:"ibiza",
    color:"blanco",
    peso:"1200kg"
}

console.log(`El color del coche ${coche1.marca} es ${coche1.color}`); // para acceder a uno de los valores tenemos que poner primero el nombreDelObjeto.parametro

const vendedor = {
    nombre : "David",
    apellido:"Soler",
    empresa: "Repsol",
    habilidades: ["trabajador","eficaz","puntual"], // tambien podemos pooner un array dentro de un objeto y accedeer a sus valores.
    vender: function (){
        let nombre="David"
        let producto="botella de butano"
        console.log( `${nombre} a vendido una ${producto}`);
    }, // tambien se puede poner funciones

    nombreCompleto: function (){
        let segundoAp="Bazar"
        return (`${this.nombre} ${this.apellido} ${segundoAp}`)
    } // también se puede crear una función con otros parametros que tenga el objeto. La palabra reservada this hace referencia a algo que está fuera de las llaves en este caso cualquier cosa que este fuera de las llaves como por ejemplo nombre y empresa , etc. Algo que esta fuera de donde se está trabajando.
}

vendedor.vender()
console.log(vendedor.nombreCompleto())
console.log(vendedor.empresa)
console.log(vendedor.habilidades[0])