let formPrincipal = document.getElementById("formPrincipal");
let inputNombre = document.getElementById("nombre");
let inputEdad = document.getElementById("edad");
let inputCPostal = document.getElementById("codePostal");

formPrincipal.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Procesandig datos");

    if(inputCPostal.value.length == 5){
        console.log("Codigo postal valido");
    }
    else{
        console.log("Codigo postal invalido" + codigoPostal.value.length);
    }
    


});