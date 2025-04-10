let btnGuardar = document.getElementById("btnGuardar");
let btnBorrar = document.getElementById("btnBorrar");
//let encabezado = document.getElementById("encabezado");
let Nombre = document.getElementById("Nombre");


//Guardar el nombre que se ingresa
btnGuardar.addEventListener("click", function(){
    localStorage.setItem("Nombre", Nombre.value);
});//btnGuardar

//if(Nombre !=null){
//    encabezado.innerText = `Hola ${Nombre}`;
//}else{
//    encabezado.innerText = `Por favor ve e ingresa tu nombre al index`
//}
