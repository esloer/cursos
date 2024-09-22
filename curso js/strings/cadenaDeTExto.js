//  String es una cadena de texto

let string = 'let\'s do it' // para poner una comilla simple dentro de entre dos comillas simples se pone \ antes de la comilla

console.log(string);

let string1 = 'lets \n do it' // para un salto de linea

console.log(string1);

// .length es para contar las letras que tiene una variable ejemplo

let animal = "murcielago"

console.log(animal.length)

// nombreVAriable.slice nos sirve para cortar una parte de una cadena de texto

// nombreVariable.slice(inicio,final) ejemplo

let color = "amarillo"

console.log(color.slice(2,4))

let resultado = color.slice(3,5)

console.log(resultado)

// sustituir un trozo de la cadena de texto con replace 

// nombreVariable.replace("trozo de texto a sustituir , ""nuevo texto")

let texto = "Estudiar es muy importante en españa"

const resultado1 = texto.replace("españa","el mundo")

console.log(resultado1);

// pasar una cadena de texto a todo en mayusculas con toUpperCase()
// nombreVariable.toUpperCase()

let mayusculas = texto.toUpperCase()

console.log(mayusculas);

// pasar una cadena de texto a todo en mayusculas con toLowerCase()
// nombreVariable.toLowerCase()

let minusculas=texto.toLocaleLowerCase()

console.log(minusculas);

// Para concatenar tambien sirve concat ejemplo

const tex1= "hola"
const text2="david"

const textoCompleto= tex1.concat(text2)
console.log(textoCompleto);

// quitar quitar los espacios de alante y atras con trim
// nombreVariable.trim()

const palabra = "          hasta la proxima   "
const palabra1=" Luck y lion"

const palabraCompleta=palabra.trim().concat(palabra1.toLocaleUpperCase())
console.log(palabraCompleta)

//dividir el texto con split y no los transforma en un array.
// nombreVariable.split(aqui indicamos que factor va a separar el textoen diferentes lines )

const numeros="uno.dos.tres"
const conSplit= numeros.split('.')
console.log(conSplit);

