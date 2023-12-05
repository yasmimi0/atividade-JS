// script.js

function verificarAprovacao() {
    // Obter o valor da nota do input
    var notaDoAluno = document.getElementById("nota").value;

    // Verificar se a nota é um número válido
    if (isNaN(notaDoAluno) || notaDoAluno === "") {
        alert("Por favor, insira uma nota válida.");
        return;
    }

    // Converter a nota para um número
    notaDoAluno = parseFloat(notaDoAluno);

    // Verificar se o aluno está aprovado ou reprovado
    var resultadoElemento = document.getElementById("resultado");

    if (notaDoAluno >= 7) {
        resultadoElemento.textContent = "Aprovado!";
        resultadoElemento.className = "aprovado";
    } else {
        resultadoElemento.textContent = "Reprovado.";
        resultadoElemento.className = "reprovado";
    }
}
