function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("foto");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora >= 0 && hora < 12){
        img.src= 'c:\Users\pgpga\Downloads\fotomanha.png'
    }
    else if(hora >= 12 && hora < 18){
        img.src= 'c:\Users\pgpga\Downloads\fototarde.png'
    }
    else{
        img.src= 'c:\Users\pgpga\Downloads\fotoNoite.png'
    }
}



