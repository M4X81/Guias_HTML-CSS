const ul = document.getElementById("lista");
const boton = document.getElementById("btn");

async function getAllChar(){
let response = await fetch("https://rickandmortyapi.com/api/character");
let {results} = await response.json();
return results;
}
/*
function agregar(nombre, estatus, especie, tipo, genero,imagen){
    let li = document.createElement("li");
    li.innerHTML=`Nombre: ${nombre} - 
    Estatus: ${estatus} -
    Especie: ${especie} -
    Tipo ${tipo} -
    Género: ${genero} -
    Imagen ${imagen} `;
    
    ul.append(li);
}

boton.onclick = async function (){
    let results = await getAllChar();
results.forEach(e => {
    agregar(e.name, e.status,e.species,e.type,e.gender,e.origin,e.image);
});*/

function agregar(nombre, imagenURL) {
    let li = document.createElement("li");
    let img = document.createElement("img");
    
    img.src = imagenURL; 
    img.alt = nombre;    
    
    li.innerHTML = nombre;
    li.appendChild(img); 
    
    ul.append(li);
}

boton.onclick = async function () {
    let results = await getAllChar();
    results.forEach(e => {
        agregar(e.name, e.image); 
    });
}


