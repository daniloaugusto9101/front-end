var lista = ['banana','maçã','uva','morngo'];

var body = document.getElementsByTagName('body');

var ul = document.createElement('ul');

body[0].appendChild(ul);



var listaUl = document.getElementsByTagName('ul');

// listaUl[0].appendChild(listaFor);

console.log(body[0]);


for (var i = 0; i < lista.length; i++) {
    var listaFor = document.createElement('li');
    var textLi = document.createTextNode(lista[i]);

    // listaFor.appendChild(textLi);

    listaUl[0].appendChild(textLi);


    console.log(listaFor);
}



// var lista = ['banana','maçã','uva','morngo'];

// var body = document.getElementsByTagName('body');

// var ul = document.createElement('ul');

// body[0].appendChild(ul);

// var li = document.createElement('li');

// var listaUl = document.getElementsByTagName('ul');

// listaUl[0].appendChild(li);

// console.log(body[0]);


