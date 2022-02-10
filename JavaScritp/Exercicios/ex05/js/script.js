document.querySelector("#formulario").addEventListener("submit", function (e) {
    var idade = document.querySelector("#idade").value;

    if (idade >= 18) {
        alert("é maior de idade");
    } else {
        alert("Não é maior de idade")
    }

    // if(idade >= 18){
    //     alert(`Você tem ${idade}, e tera que pagar os boletos `);
    // }else{
    //     alert(`Você tem ${idade}, e não paga boletos ainda`);
    // }

    e.preventDefault();
});