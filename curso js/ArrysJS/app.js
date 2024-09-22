// El método map crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
console.log("map");
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log("--- map ---");
console.log();

// El método filter crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
console.log("filter");
const numbers1 = [1, 2, 3, 4, 5];
const evens = numbers1.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
console.log("--- filter ---");
console.log();

// El método reduce aplica una función a un acumulador y a cada valor de la array (de izquierda a derecha) para reducirlo a un único valor.
console.log("reduce");
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15
console.log("--- reduce ---");
console.log();

// El método forEach ejecuta la función indicada una vez por cada elemento del array.
console.log("foreach");
const numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach(num => console.log(num * 2));
console.log("--- foreach ---");
console.log();

// El método find devuelve el primer elemento del array que cumpla con la condición implementada por la función dada.
console.log("find");
const numbers4 = [1, 2, 3, 4, 5];
const firstEven = numbers4.find(num => num % 2 === 0);
console.log(firstEven); // 2
console.log("--- find ---");
console.log();

// El método findIndex devuelve el índice del primer elemento del array que cumpla con la condición implementada por la función dada.
console.log("findIndex");
const numbers5 = [1, 2, 3, 4, 5];
const firstEvenIndex = numbers5.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // 1
console.log("--- findIndex ---");
console.log();

// El método some comprueba si al menos un elemento del array cumple con la condición implementada por la función dada. Si es así nos dara True
console.log("some");
const numbers6 = [1, 2, 3, 4, 5];
const hasEven = numbers6.some(num => num % 2 === 0);
console.log(hasEven); // true
console.log("--- some ---");
console.log();

// El método every comprueba si todos los elementos del array cumplen con la condición implementada por la función dada. Si es correcto nos dara true de lo contrario false.
console.log("every");
const numbers7 = [ 2, 4, 6, 8, 10];
const allEven = numbers7.every(num => num % 2 === 0);
console.log(allEven); // true
console.log("--- every ---");
console.log();

// El método includes determina si un array contiene un determinado elemento, devolviendo true o false según corresponda.
console.log("includes");
const numbers8 = [1, 2, 3, 4, 5];
const includesThree = numbers8.includes(3);
console.log(includesThree); // true
console.log("--- includes ---");
console.log();

// El método sort ordena los elementos de un array localmente y devuelve el array ordenado.
console.log("sort");
const numbers9 = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b);
console.log(numbers9); // [1, 2, 3, 5, 
console.log("--- sort ---");
console.log("");





