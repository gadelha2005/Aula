var botao = document.getElementById("botao");
botao.onclick = confirmar;

function confirmar(){
    var sand = document.getElementById("sanduiche").value;
        var sanduiche = parseInt(sand * 8);
    var tap = document.getElementById("tapioca").value;                                               
        var tapioca = parseInt(tap * 5);
    var sucoT = document.getElementById("suco").value;
        var suco = parseInt(sucoT * 3);                                                                                                          
    var cafeT = document.getElementById("cafe").value;
        var cafe = parseInt(cafeT * 2);
    var total = Number(sanduiche + tapioca + suco + cafe);
    
    var res = document.getElementById("res");
    var res2 = document.getElementById("res2");

    var pagamento = document.getElementById("pagamento").value;
    if(pagamento =="pix"){
        res.innerHTML = `CONTA = R$ ${total}`;
        res2.innerHTML = `CHAVE : 61994379340 `;
    }
    if(pagamento == "dinheiro"){
        var pago = Number(prompt("Digite o valor pago : "));
        if(pago > total){
            alert("COMPRA FINALIZADA");
            var troco = pago - total;
            res.innerHTML = `CONTA = ${total} R$`;
            res2.innerHTML = `TROCO = ${troco} R$`;
        }
        else if(pago == total){
            alert("COMPRA FINALIZADA");
            res.innerHTML = `CONTA = ${total} R$`;
        }
        else{
            alert("COMPRA INVÁLIDA");
        }
    }


}