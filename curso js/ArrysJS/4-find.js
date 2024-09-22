// El método find devuelve el primer elemento del array que cumpla con la condición implementada por la función dada.

// find en modo arrow para itinerar en cada uno de los elementos
const numbers4 = [1, 2, 3, 4, 5];
const firstEven = numbers4.find(num => num % 2 === 0);
console.log(firstEven); // 2

// find pero con una funcion normal
const numeros = [1, 2, 3, 4, 5]
const primero = numeros.find(function(numero){
    return numero %2 === 0
})
console.log(primero);

// find con un if en modo arrow
const masNumeros = [1, 2, ,3, 4, 5]
const saberPrimero = masNumeros.find(numer => {
    if(numer %2 != 0){
        return numer
    }
})
console.log(saberPrimero);

// find con un if en modo funtion

const muchosNumeros = [1, 2, 3, 4, 5]
const saberElPrimero = muchosNumeros.find(function(numbers) {
    if(numbers %2 === 0){
        return numbers
    }
})
console.log(saberElPrimero);