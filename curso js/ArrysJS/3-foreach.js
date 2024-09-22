// El método forEach ejecuta la función indicada una vez por cada elemento del array.

// foreach en modo arrow para itinerar en cada uno de los elementos
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(num => console.log(num * 2));

// --------------------------------------------

// foreach pero con una funcino normal
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(function(numero){
    doble = numero * 2
    console.log(doble);
})

// foreach con un if en modo arrow
const numeros3 = [1, 2, 3, 4, 5]
numeros3.forEach(numero => {
    if (numero %2 === 0){
        console.log(`${numero} es par`);
    }else{
        console.log(`${numero} es impar`);
    }
})

// foreach con if con una funcion normal.

const numero3 = [1, 2, 3, 4, 5]
numero3.forEach(function(num){
    if(num %2 === 0){
        console.log(`El numero ${num} es par`);
    }else{
        console.log(`El numero ${num} es impar`);   
    }  
})