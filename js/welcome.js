let btnBorrar = document.getElementById("btnBorrar");
let encabezado = document.getElementById("encabezado");


btnBorrar.addEventListener("click", function(event){
    event.preventDefault;
    localStorage.removeItem("Nombre");
    
});//btnBorrar


encabezado.innerText = `Hola , bienvenido de nuevo`;

//if(localStorage.getItem()!=null){
//    encabezado.insertAdjacentHTML = `Hola ${localStorage.getItem}, bienvenido de nuevo`;
    
//}else{


//};