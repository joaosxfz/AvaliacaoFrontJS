function exercicio1() {
    //15. Peça a base maior, base menor e altura de um trapézio. Calcule a área.
    const maior = Number(prompt("Digite a base maior"))
    const menor = Number(prompt("Digite a base menor"))
    const altura = Number(prompt("Digite a altura do trapézio"))
    const resultado = (maior + menor) * (altura / 2)

    alert("A área é: " + resultado)
}
const buttonexercicio1 = document.getElementById("exercicio1")
buttonexercicio1.addEventListener('click', () => { exercicio1() })

// -------------------------QUESTÃO 2---------------------------------------------

function exercicio2() {
    //17. Peça a altura e o peso de uma pessoa. Calcule o IMC.
    const altura = Number(prompt("Digite sua altura"))
    const peso = Number(prompt("Digite seu peso"))
    const resultado = peso / (altura * altura)

    alert("Teu imc é: " + resultado.toFixed(1))
}
const buttonexercicio2 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2() })

// -------------------------QUESTÃO 3---------------------------------------------

function exercicio3() {
    //2. Peça o comprimento e a largura de um terreno. 
    // Calcule e mostre a quantidade de metros quadrados.

    const comp = prompt("Digite o comprimento do terreno")
    const largura = prompt("Digite a largura do terreno")
    const resultado = comp * largura

    alert("A área possui " + resultado + " m por quadrado")
}
const buttonexercicio3 = document.getElementById("exercicio3")
buttonexercicio3.addEventListener('click', () => { exercicio3() })

// -------------------------QUESTÃO 4---------------------------------------------

function exercicio4() {
    //14. Peça o horário atual (apenas a hora). Informe:
    // Bom dia (5–11)
    // Boa tarde (12–17)
    // Boa noite (18–4)

    const hora = Number(prompt("Digite o horário (APENAS HORA"))

    if (hora >= 5 && hora <= 11) {
        alert("BOM DIAAAAAAAA ☀️☀️☀️")
    }
    else if 


}
const buttonexercicio4 = document.getElementById("exercicio4")
buttonexercicio4.addEventListener('click', () => { exercicio4() })

//15, 17, 2, 14