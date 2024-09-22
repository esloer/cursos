// El método filter crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.


// Filter en modo arrow en el cual nos filtra por numeros pares

const numbers1 = [1, 2, 3, 4, 5];
const evens1 = numbers1.filter(num => num % 2 === 0);
console.log(evens1); // [2, 4]

// ------------------------------

// filter pero como una funcion norml
const numbers0 = [1, 2, 3, 4, 5];
const evens0 = numbers0.filter(function(num) {
  return num % 2 === 0;
});

console.log(evens0); // [2, 4]

// ------------------------------

// filter con un if en modo arrow
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers2 = numbers2.filter(num => {
  if (num % 2 === 0 || num > 3) {
    return true;
  }
  return false;
});
console.log(filteredNumbers2); // [2, 4, 5, 6, 7, 8, 9, 10]

// -------------------------

// filter con if con una funcion normal.
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers3 = numbers2.filter(function(num) {
  if (num % 2 === 0 || num > 3) {
    return true;
  }
  return false;
});
console.log(filteredNumbers3); // [2, 4, 5, 6, 7, 8, 9, 10]
