var botao = document.getElementById("botao");
botao.onclick= confirmar;

var fila = ["joão"]

function confirmar(){
    var escolha = document.getElementById("escolha").value;
while (escolha!=3)
    if (escolha=="1"){
        var novoPaciente = prompt("Digite o nome do novo paciente: ");
        fila.push(novoPaciente)
        alert(`Fila de espera : ${fila} `);
        break;
    }
    else if (escolha=="2"){
        fila.shift();
        alert(`Fila de espera : ${fila}`); 
        break
    }
    else {
        alert("Serviço indisponível!");
    }
      if  (fila.length==0){
        alert("A fila de espera já está vazia!")
      }
    }



      






