const num1=document.querySelector("#num1");
const num2=document.querySelector("#num2");
const del=document.querySelector("#del");
const num3=document.querySelector("#num3");


num1.addEventListener("click", function() {
    agregar(num1.value);
}); // addEventListener funcion si es con parametros

num2.addEventListener("click", () => agregar(num2.value));//addEventListener en modo arrow

del.addEventListener("click",eliminar)//addEventListener funcion sin parametros

// del.addEventListener("click", () => {
//     eliminar();
//   }); en modo arrow

num3.addEventListener("click", agregar2); // addeventlistener para utlizar this que este this se referiere al elemento que hace referencia al eventlistener que es el buttnos con el numer 3

function agregar2(){
    const pantalla = document.querySelector("#pantalla");
    const valor = this.value ; // ejemplo de como utilizar el this . En este caso se utiliza this significa el elmente que haga click coja su value
    pantalla.value+=valor
}


function agregar(valor) {
    const pantalla = document.querySelector("#pantalla");
  
    if (pantalla.value=="") {
      if(valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor==="." || valor==="="){
        return; // con return solo hacemos que devuelva nada
      }
      else {
        pantalla.value += valor;
      }
    }
  
    else if (valor === ".") {
      const caracteresPunto = pantalla.value.match(/\./g);
      const ultimoSigno = pantalla.value.match(/[-+*/]/g);
      const numerosDespuesSigno = pantalla.value.split(/[-+*/]/).pop();
  
      if (
        (!caracteresPunto && !ultimoSigno) || // Permitir agregar el primer punto
        (ultimoSigno && numerosDespuesSigno.indexOf(".") === -1) // Permitir agregar un punto después de un signo si no hay otro punto
      ) {
        pantalla.value += valor;
      }
    } else {
      pantalla.value += valor;
    }
  }

    
function borrar(){
    document.querySelector("#pantalla").value=""
}

function eliminar() {
    const pantalla = document.querySelector("#pantalla");
    const valorActual = pantalla.value;
    const nuevoValor = valorActual.slice(0 ,-1);//esto limina el ultimo caracter
    pantalla.value = nuevoValor;
  }

function calcular(){
    const valorPantalla = document.querySelector("#pantalla")
    let pantallaVacia = valorPantalla.value
    const resultado = eval(valorPantalla.value)//eval sirve para que evelue lo que hay en el imput y ver su puede hacer operaciones
    if(pantallaVacia==="" ){
        return ;
    }
    else{
        valorPantalla.value=resultado
    }
}
   
