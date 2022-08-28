//Aqui faz com que o valor calculado só seja mostrado quando apertar o botão, por isso o display none.

document.getElementById("valor-calculado").style.display = "none";
document.getElementById("each").style.display = "none";

//funcao para após o clique, calcular o valor médio do jantar//

function calculateDinner(){
    var totalConta = document.getElementById("total-conta").value;
    var taxaServico = document.getElementById("taxa-servico").value;
    var numeroPessoas = document.getElementById("numero-pessoas").value;

//verificação/validação de valores no preenchimento.

//isNaN é a condição = is not a number.

    if(totalConta === "" || taxaServico == 0 || isNaN(totalConta) || isNaN(numeroPessoas)){
        alert("Por favor, coloque um valor(em números) válido!");
        return;
    }

    if (numeroPessoas === "" || numeroPessoas <= 1){
        numeroPessoas = 1;
        document.getElementById("each").style.display = "none"
    } else {
        document.getElementById("each").style.display = "block"
    }

    //calculo para os valores

    var totalTaxaServico = (totalConta * taxaServico) / numeroPessoas;
    var total = totalTaxaServico + (totalConta / numeroPessoas);

    //o Math.round é um atributo para cálculos matemáticos, ele arredonda o mais próximo de um valor inteiro

    total = Math.round(total * 100) / 100;

    //o toFixed é para reduzir só dois valores depois da vírgula.
    total = total.toFixed(2);

    document.getElementById("valor-calculado").style.display = "block";
    document.getElementById("valor-por-cabeca").innerHTML = total;
}

document.getElementById("calcular").onclick = function(){
    calculateDinner();
}