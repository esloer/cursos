// con if es como si decimos si se cumple la condicion se ejecuta mi programa . Y el else se va a ejecutar si el if no se cumple y no importa poner en el una condicion

// ejemplo edad para beber

const chico1 = 28;

const chico2 = 17;

if(chico1 >= 18){
    console.log("si que puedes beber");
}else{
    console.log("no puedes beber");
}

if(chico2 >= 18){
    console.log("si que puedes beber");
}else{
    console.log("no puedes beber");
}

// tambien se puede poner un and con el simbolo && y para que el if se pueda ejecutar se tienen que cumplir las dos condiciones ejemplo

if(chico1 >= 18 && chico1<=60){
    console.log("si que puedes beber");
}else{
    console.log("no puedes beber");
}

// switch

switch (chico1){
    case chico1 <= 18:
        console.log("no puedes beber") 
        break;
    
    case chico1 >= 18:
        console.log("si que puedes beber")
        break;
    
    default:
        console.log("vete a tu casa");
}