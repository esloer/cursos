// for of se utiliza mas pa arrays

let cursos = ["html","css","js","react","angular"]

for(curso of cursos ){ // se utiliza para array la primera palabra se puede poner la que uno quiera y depues del of se pone el nombre del Array
    console.log(curso);
}

// for in se utiliza mas para objetos

const objeto = [
    {nobre:"david",apellido:"soler"},
    {nobre:"luck",apellido:"bazar"},
    {nobre:"lion",apellido:"lopez"}
]

for(nose in objeto){
    console.log(objeto[nose]);
}

//  foreach para recorrer una array tambien de forma mas facil

let numerosA = [1,2,3,4,5,6];

numerosA.forEach(numero => {
    console.log(numero);
});


// bucle while siempre se ejecuta si se cumple la condicion

// let edad = 0

// while (edad < 18){
//     console.log("eres menor de edad");
//     edad++
// }
// console.log("felicidades ya tienes 18");

// do while en este caso el do tiene el programa y se pone primer y por ultimo se pone pone el while que tiene la condicion

// do{
//     console.log("eres menor de edad");
//     edad++
// }while(edad < 18)
// console.log("felicidades ya tienes 18")