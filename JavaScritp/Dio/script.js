function calculdora() {
    const op = prompt("Digite a operação\n 1 - Somar\n 2 - Dividir\n 3 - Multiplicar\n 4 - Subtrair");

    let num1 = Number(prompt("Digite o valor 1"));
    let num2 = Number(prompt("Digite o valor 1"));
    let result;

    if(op == 1){
        somar();
    }else if(op == 2){
        dividir();
    }else if(op == 3){
        multiplicar();
    }else if(op == 4){
        subtrair();
    }else{
        alert("Operacao invalida");
        calculdora();
    }

    function somar(){
        let result = num1 + num2;
        prompt(`Resultado da soma de: ${num1} + ${num2} = ${result}`)
    }

    function dividir(){
        let result = num1 / num2;
        prompt(`Resultado da divisoa de: ${num1} / ${num2} = ${result}`)
    }
    function multiplicar(){
        let result = num1 * num2;
        prompt(`Resultado da multiplicacao de: ${num1} x ${num2} = ${result}`)
    }
    function subtrair(){
        let result = num1 - num2;
        prompt(`Resultado da subtracao de: ${num1} - ${num2} = ${result}`)
    }
}

calculdora();