function mostrar(){
    //Nombre Completo
    var name = document.getElementById("nombre").value;
    var Correo = document.getElementById("correo").value;
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("post").value = "";
    alert("Estimado: " + name + " se envio su mensajesss con el correo " + Correo);
}

function change(){
    document.body.style.backgroundImage = "url(Image/f1.jpg)";
}