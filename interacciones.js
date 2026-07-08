const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        menu.classList.toggle("activo");

    });

}

const busqueda = document.getElementById("busqueda");

if(busqueda){

busqueda.addEventListener("keyup",()=>{

let texto = busqueda.value.toLowerCase();

let productos = document.querySelectorAll(".producto");

productos.forEach(producto=>{

let nombre = producto.querySelector("h3")
.textContent
.toLowerCase();

if(nombre.includes(texto)){

    producto.style.display="block";

}else{

    producto.style.display="none";

}

});

});

}

const formularios = document.querySelectorAll("form");

formularios.forEach(form=>{

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("¡Gracias por contactarnos! Te responderemos pronto.");

});

});

const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(enlace=>{

enlace.addEventListener("click",(e)=>{

let destino = document.querySelector(
enlace.getAttribute("href")
);

if(destino){

e.preventDefault();

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});