var sal = Number(prompt("Digite o salario"));
var vend = Number(prompt("Digite total de venda $: "));

var comissao = vend * 0.15;
var totSal = sal + comissao;

console.log(`Salario: R$ ${sal}, comissoa: ${comissao}, salario final: ${totSal}`)
