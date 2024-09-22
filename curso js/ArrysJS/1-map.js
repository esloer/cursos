// El método map crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

// map en modo arrow para itinerar en cada uno de los elementos
const numbers0 = [1, 2, 3, 4, 5];
const doubled = numbers0.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// --------------------------------------------

// map pero con una funcion normal
const numbers1 = [1, 2, 3, 4, 5];
const doble = numbers1.map(function(numero){
    return numero*2
})
console.log(doble);

// --------------------------------------------

// map con un if en modo arrow
const numbers2 = [1, 2, 3, 4, 5];
const doble2 = numbers2.map(numero => {
    if(numero %2 === 0){
        return numero * 2
    }else{
        return numero - numero
    }
})
console.log(doble2);

// --------------------------------------------

// map  con if con una funcion normal.

const numeros3 = [1, 2, 3, 4, 5]
const doble3 = numeros3.map( function(num){
    if(num %2 != 0){
        return num * 2
    }

    return num - num
})

console.log(doble3);



