// como se hace un arrray para guardar informacion

const array = ["html","css","js"] // esta es la forma de como se hace un array

// otra forma de inicializalo es de la siguoente manera

console.log(array);

const array1 = new Array (3) // se sabe que la primera posicion del elemento es siempre 0. Y ademas podemos mezclar los tipos de datos.

array1[0]="html"
array1[1]=[1,2,3,4]
array1[2]={nombre:"david"}

console.log(array1);

document.querySelector("#p1").innerHTML=array1


//length es el en array indica cuantos elementos hay en el array y si empieza a contar desde 0

console.log("length es el en array indica cuantos elementos hay en el array y si empieza a contar desde 0");
console.log(array1.length);

console.log('');

// .short() ordena un array

console.log('con .sort() ordenamos un array tanto numeros como letras');

const anum= [5,3,1,9,6,4]

console.log(anum +" "+"sin ordenar");
console.log(anum.sort() +" "+"ordenado");

//para saber cual e e ultimo elemento de un array se hace de la sigiente manera nombreA[nombreA.lenght-1]

// con letras no hay problemas pero short con numero puedo ocurrir esto

const numerosGA=[1,2,3,11,12]

console.log(numerosGA+" "+"array original");
console.log(numerosGA.sort()+" "+"array con sort");
console.log(numerosGA.sort((x,y)=>x-y)+" "+"array con sort");


/* bucle for */

// para recorer un array se utiliza los bucles en este caso vamo a rrecorrerlo con un for. la i viene de indice que es como se le llama a la posicion de los elementos dentro de un array

// 0 la posicion en a que se empieza ; la condicion para que se siga ejecutando el bucle ; lo que queremos que haga



let info = ""
for (let i = 0 ; i<anum.length ; i++){
    // aqui adentro pondremos el codigo que se va a ejecutar cada vez que hace un bucle
     
    info+="<li>" + anum.sort()[i] + "</li>"
    document.getElementById("li1").innerHTML = info
}


/* si tenemos un array se pueden añadir elementos de la siguiente forma tambien */

const marcaA = ["peugeot","seat"]
marcaA[marcaA.length]="opel"

console.log("");
console.log("vemos como se agrega opel sin estar en un principio dentro de la array");
console.log(marcaA);


/* METODOS ARRAY */

const frutasA = ["manzana","pera","banana","naranja","naranja","manzana"]
const usuarioA = [
    {nombre:"david" ,apellido:"soler"},
    {nombre:"kira" ,apellido:"soler"},
    {nombre:"luck" ,apellido:"bazar"},
    {nombre:"lion" ,apellido:"lopez"},
]

/* .FILTER

.filter(callback) - filtra todos los elementos del array que cumplan la condicion y devule un nuevo array


*/


const resultado1 = frutasA.filter(x => x == "manzana");
const resultado2 = usuarioA.filter(x => x.apellido == "soler");
console.log("");
console.log(resultado2);

/* luego podremos hacer un for al resultado2 para ver el nombre que contiene en apellido y solo mostrar los nombre */

console.log("");
console.log("para ver el nombre con un for despues de un filter");

for(let i = 0 ; i < resultado2.length ; i++){
    const rFinal = resultado2[i]
    console.log(rFinal.nombre);
}

/* .MAP

.map(callback) - transforma todos los elementos del array y devuelve un nuevo array

*/



const manzanaA = ["manzana","manzana","manzana"]

/* ejemplo de funcion con foma arrow  */

function resultadoM1(){
    let map = manzanaA.map( fruta => {
        if(fruta=="manzana"){
            return "naranja"
        }
    })
    console.log(map)
}

resultadoM1()


/* ejemplo de funcion con foma function  */

function resultadoM2(){
    let map = manzanaA.map(function(fruta){
        if(fruta=="manzana"){
            return"naranja"
        }
    })

    console.log(map);   
}

resultadoM2();

/* ejemplo de const con foma arrow  */

const map1 = manzanaA.map(fruta=>{
    if(fruta== "manzana"){
        return "naranja"
    }
})

console.log(map1)

/* ejemplo de const con foma arrow  */

const map2 = manzanaA.map(function(fruta){
    if(fruta=="manzana"){
        return "naranja"
    }
})

console.log(map2)

// con fill nos permite remplazar lo que ponemos a partir de un indice el indice siempre es 0 que es donde comienza no confundir con el numero de elementos

const naranjaA=["naranja","naranja","naranja","naranja","naranja"]
console.log("");
console.log("con fill para pasar de una cosa a otra desde una posicion");
const resultadoN1 = naranjaA.fill("mandarina",1)
console.log(resultadoN1)

/* .FIND */
// solo trae el primero que encuantra y lo devuelve en forma de string

const naranjaA1=["naranja","naranja","naranja","pera","naranja"]
console.log("");
const resultadoFind = naranjaA1.find(x => x == "pera")
console.log("este ees el resultado con find");
console.log(resultadoFind);

// prueba con un objeto

const objetoA = [
    {nomnbre:"david", apellido:"soler"},
    {nomnbre:"luck", apellido:"soler"}
]

const resultadoFindObjeto = objetoA.find(x=>x.apellido=="soler")
const nombreDelResultado= resultadoFindObjeto.nomnbre


console.log("");
console.log("este ees el resultado con find pero conun objeto y va a traer solo el nombre del primer apellido que encuentre");
console.log(nombreDelResultado);


/* .FINDINDEX */
// nos indica la posicion del primer elemento si hay mas no  los cuenta

const platanoA = ["platano","lima","platano","lima"]

const resultadoFindIndex = platanoA.findIndex(x=>x=="lima")
console.log("");
console.log("este ees el resultado con findIndex ");
console.log(resultadoFindIndex);

/* .SOME */
// con some nos indica si con true s hay un elemento con dicho nombre y con false si no lo hay

const platanoA2 = ["platano","lima","platano","lima"]

const resultadoSome=platanoA2.some(x=>x=="platano")
console.log("");
console.log("este ees el resultado con some que da true si es pera ");
console.log(resultadoSome);

/* .EVERY */
// con every es si todos los elmentos son iguales si es asi nos dara true y si un elmento es fals nos dara false

const resultadoEvery=platanoA2.every(x=>x=="platano")
console.log("");
console.log("este ees el resultado con some que da true si es pera ");
console.log(resultadoEvery);
console.log("");


/* .SHIFT() */

// con shift corta el primer elemento y nos lo devulve dejando el arry original sin dicho elemnto

const numerosA=[1,2,3,4]
console.log("rarray original");
console.log(numerosA);

const resultadoShift= numerosA.shift()

console.log("resultado del shif");
console.log(resultadoShift);
console.log("como queda dspues del shift");
console.log(numerosA);
console.log("");


/* .POP() */

// con pop es al contrario saco el ultimo elemento

const numerosA1=[1,2,3,4]
console.log("rarray original");
console.log(numerosA1);

const resultadoPop= numerosA1.pop()

console.log("resultado del pop");
console.log(resultadoPop);
console.log("como queda dspues del pop");
console.log(numerosA1);
console.log("");

/* .PUSH() */

// con push se agrega un elemento nuevo al array pero al final

const numerosA2=[1,2,3,4]
console.log("array original");
console.log(numerosA2);
let a=5
numerosA2.push(a)
console.log("array con push del nuevo elemnto");
console.log(numerosA2);
console.log("");


/* .UNSHIFT() */

// con push se agrega un elemento nuevo al array pero al inicio

const numerosA3=[2,3,4]
console.log("array original");
console.log(numerosA3);
let b=1
numerosA3.unshift(b)
console.log("array con unshift del nuevo elemnto");
console.log(numerosA3);
console.log("");

// splice es para cortar el array lo podemos poner de la siguiente manera .splice(indice empieza siempre en 0 , el numero de elementos , y poner por lo que quiero copiar)

const numerosA4=[1,2,3,5,]
console.log("array original");
console.log(numerosA4);
let c=1
numerosA4.splice(4,1,4)
console.log("array con splice del nuevo elemnto");
console.log(numerosA3);
console.log("");

// slice es para cortar y nos devuelve el resultado del corte y se tiene que porner en una vriable . para hacerlo es .slice(inicio que va a corta incluye en numero , final que no incluye en el corte)

const numerosA5=[5,6,7,8]
console.log("array original");
console.log(numerosA5);
const resultadoSlice =  numerosA5.slice(1,2)
console.log("array con slice del nuevo elemnto");
console.log(resultadoSlice);
console.log("");

// .join es para que en las arrays salgan con cualquier sigono que se nos ocurra

const cursosA = ["html","css","js"]

document.querySelector("#p2").innerHTML=cursosA.join(" & ")

// concat nos sirve para unir dos array

const cursos2A = ["node","react","mongo"]

console.log("primer curso");
console.log(cursosA);
console.log("segundo curso");
console.log(cursos2A);
console.log("concatener dos cursos");
console.log(cursosA.concat(cursos2A));
