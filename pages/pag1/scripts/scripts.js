function iniciar(){

    var contrasenya = (document.getElementById("contra").value);
    
    
    if (contrasenya.toLowerCase() == "selamat jalan"){
        //document.getElementById("validar"). = green; //posar de color verd la resposta correcta
        document.getElementById("valid").innerHTML = "RESPOSTA CORRECTA! Endavant!";
        document.getElementById("invalid").innerHTML = "";
        document.getElementById("btnEndavant").hidden = false;
        document.getElementById("btnIniciar").hidden = true;

    }else {
        //document.getElementById("validar"). = red; //posar de color vermell la resposta incorrecta
        document.getElementById("invalid").innerHTML = "Resposta incorrecta... torna-hi!";
    }
}

function endavant(){
    location.href = "../pag2/pag2.html";
}