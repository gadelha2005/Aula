
var botao1= document.getElementById("botao1");
    botao1.onclick = media1;
var botao2= document.getElementById("botao2");
    botao2.onclick = media2;

function media1(){
    var av1T = document.getElementById("av1").value;
        var av1 = Number(av1T);
    var av2T = document.getElementById("av2").value;
        var av2 = Number(av2T);
    var mediaP = Number((av1 + av2)/2);
    var res1 = document.getElementById("res1");
    var res2 = document.getElementById("res2");

    if(mediaP >= 4){
        alert("DIGITE SUA AV3");
    }
    else{
        res1.innerHTML = `REPROVADO `;
        res2.innerHTML = `MÉDIA = ${mediaP}`;
    }


}

function media2(){
    var av1T = document.getElementById("av1").value;
        var av1 = Number(av1T);
    var av2T = document.getElementById("av2").value;
        var av2 = Number(av2T);
    var av3T = document.getElementById("av3").value;
        var av3 = Number(av3T);
    var mediaP = Number((av1 + av2)/2);
    var mediaT = Number((mediaP + av3)/2);
    var res1 = document.getElementById("res1");
    var res2 = document.getElementById("res2");

    if(mediaT >=5 && av3 >=4){
        res1.innerHTML = `APROVADO`
        res2.innerHTML = `MÉDIA = ${mediaT}`;
    }
    else if(mediaT < 5 || av3 < 4){
        res1.innerHTML = `REPROVADO`;
        res2.innerHTML = `MÉDIA = ${mediaT}`
    }
   
}





