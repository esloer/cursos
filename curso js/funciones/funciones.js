// Como se compone una función

function nombreDeLafuncion(parametro1 , parametro2 , etc)
{
    codigo
}

// ejemplo de funcion

function suma(a,b){
    return a+b // aqui hacemos un return que luego es necesaio hacer un console.log para poder verlo en consolo y nos devuelve el resultado de la suma
}
let respuesta = suma(5,5) // la fucion la asigamos a una varieble
console.log(respuesta) // y hacemos un console.log para poder ver el resultado

function suma1(a,b){
    let respuesta=a+b
    console.log(`la suma de ${a}+${b}=${respuesta}`); // aqui no utilizamos un return sino que directamente dentro de la fucion ya tenemos nuestro console.log
}
suma1(2,1) // y invocamos la funcion llamandola.

function transformarDeCelsiusAFaenheit(temperauraFahrenheit){
    return parseInt((5/9) * (temperauraFahrenheit-32))
}

console.log(transformarDeCelsiusAFaenheit(76));

// FUNCIONES  FLECHA NO SIEMPRE SE PUEDE USAR forma de sintaxis

let nombreDelaFuncionFlecha = (parametros1,parmetros2,etc) => {
    // lineas de codigo
}

const nombreDelaFuncionFlecha2 = (parametros1,parmetros2,etc) => {
    // lineas de codigo
}

// ejemplo de flecha. Despues del signo => si solo hay una linea de codigo se puede poner directamente sin los {} y lo que vine despues de => es el retur lo que devuelve si se necesita mas de una linea de codigo si se tiene que poner las {}

let transformarDeCelsiusAFaenheitArrow = (temperauraFahrenheit) =>{
    return parseInt((5/9) * (temperauraFahrenheit-32))
} // una forma normal.

const transformarDeCelsiusAFaenheit2Arrow = (temperauraFahrenheit) => parseInt((5/9) * (temperauraFahrenheit-32)) // una sola linea de codigo

console.log(transformarDeCelsiusAFaenheit2Arrow(76));