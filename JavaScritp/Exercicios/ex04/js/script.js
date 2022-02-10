var form = document.getElementById("formulario");
var num = document.getElementById("num");

form.addEventListener("submit", function(e){
    let res = num.value ** 2;
    alert(res);

    e.preventDefault();
});























// document.getElementById("bt").addEventListener("click", raiz);

// function raiz(){
//     var res = num ** 2;
//     alert(`resultado da raiz ${res}`);
// }

// console.log(num);