let num_1 = 0;

console.log( document.getElementById('form_num_1').value );


num_1 = Number( document.getElementById("form_num_1").value );

console.log(num_1);






function somar() {
    console.log(num_1);
    
}

function somar(n1, n2) {
    alert("a soma é "+(n1 + n2) );
}
  
function subtracao(n1, n2) {
    alert("a subtração é "+(n1 - n2) );
}
  
function multiplicacao(n1, n2) {
    alert("a multiplicação é "+(n1 * n2) );
}
  
function divisao(n1, n2) {
    alert("a divisão é "+(n1 / n2) );
}
  
  
n1 = Number( prompt("Digite o primeiro número do calculo:") );
n2 = Number( prompt("Digite o segundo número do calculo:") );
operacao = prompt("Digite a operação que você quer fazer:");
  

switch (operacao) {
    case "+":
        somar(n1, n2);
    break
    case "-":
        subtracao(n1, n2);
    break
    case "*":
        multiplicacao(n1, n2);
    break
    case "/":
         divisao(n1, n2);
    break
    default : alert("Você não digitou uma operação válida");
}
