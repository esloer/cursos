const p1 = document.querySelector("#p1")
// para poner una fecha
const fecha = new Date();
// para poner una fecha aaaa-mm-dd
const fecha1 = new Date("2023-02-12");

// para poner solo año mes o dia uno de los tres se pone get
const p2=document.querySelector("#p2")
p2.innerHTML=fecha.getFullYear()

p1.innerHTML= fecha
