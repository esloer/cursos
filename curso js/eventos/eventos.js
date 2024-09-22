function mostrar(){
    const seleccionable = document.querySelector("#seleccionable")
    
    if(seleccionable.innerHTML=="HOLA MUNDO"){
        seleccionable.innerHTML=""
    }

    else{
        seleccionable.innerHTML="HOLA MUNDO"
    }
}

function fecha(){
    const fecha = document.querySelector("#fecha")
    if(fecha.innerHTML==""){
        fecha.innerHTML= Date()
    }
    else{
        fecha.innerHTML=""
    }
}

function cursos(){
    const select=document.querySelector("#select");
    const seleccionable = document.querySelector("#seleccionable");
    if (select.value=="html"){
        seleccionable.innerHTML="Curso para HTML"
    }
    if (select.value=="css"){
        seleccionable.innerHTML="Curso para CSS"
    }
    if (select.value=="js"){
        seleccionable.innerHTML="Curso para javaScript"
    }
    if (select.value=="react"){
        seleccionable.innerHTML="Curso para REACT"
    }
    
}