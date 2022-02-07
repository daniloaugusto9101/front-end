var lista = ["Banana", "Mação", "Uva", "Pessego"];


var body = document.getElementsByTagName("Body");

var ul = document.createElement("ul");

body[0].appendChild(ul);

var pUl = document.getElementsByTagName("ul")

// pUl[0].appendChild(li);


console.log(body[0]);


for (var i = 0; i < lista.length; i++) {

    var liFor = document.createElement('li');

    var textLi  = document.createTextNode(lista[i]);

    liFor.appendChild(textLi);

    pUl[0].appendChild(liFor);

}
