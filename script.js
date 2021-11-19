// para só tirar um item da lista 1 sem ter que tirar o da lista 2 também
// assim ira sumir só o item2 da lista 1

// $('#lista1 > .item2').hide();
//outro meio \/
// let lista1 = $('#lista1');

// let body = $('body');
// console.log(body.children("#lista2"));

//na lista 1 ache o item 2 e esconda
// lista1.find(".item2").hide();

// com a função children, fará com que pegue todos os filhos, e só os filhos, não vai além, do elemento
// console.log(lista1.children().fadeOut());

// temos a função find(), que faz com que a gente busque por um descendente desse elemento 
// ele vai mais profundo( filho, neto, bisneto)

// let jq = $('#lista1');
// // com essa expressão abaixo ele retorna o Jquery, e, se fizer let jq = $("ul"); retorna o jquery e 
// //em seguida uma função com o elemento
// console.log($());

// -------------------------- ENCADEAMENTO ---------------------------
// console.log(jq);
// let jq = $('#lista1').css('color','red').slideUp(2000)
//                      .slideDown(1000)
//                      .fadeOut(1000)        
//                      .fadeIn(1000)
// console.log(jq);

//se fosse essa mesma funcionalidade acima só utilizando JScript

// let objeto = {
//     print10: function() {
//         console.log(10);
//         return this;
        
//     },
//     print20: function() {
//         console.log(20);
//         return this;
//     }
// }

// let eleMesmo = objeto.print10();
// eleMesmo.print20();

// pode fazer também
// aparecerá 10 20 10 20
// objeto.print10().print20().print10().print20();
//Jquery é um conjunto muito grande de funções, toda função que ele executa ele retorna o proprio objeto.
// então pode em seguida encadear outras e outras funções, isso é encadeamento

// -------------------------- LENDO O CONTEÚDO DE UM ELEMENTO -----------------------------
// pegar o texto
// console.log($('h1').text());
//se utilizar console.log($('h1').html()); ele também pegará MinhaLista1
// só pega oque esta escrito no conteudo dos elementos filhos também
// console.log($('#lista1').text());
// pega todo o conteudo do elementos dos filhos do elemento que foi escolhido
// console.log($('#lista1').html());
// console.log($('.title').html());

// --------------------- Pegar o valor do ELEMENTO -----------------------
// Existe mais uma maneira de pegar o conteúdo html, tentar pegar o conteudo do value, que fica 
// como default na caixa do input, o text e o html não conseguirão pegar, utilizamos a função val() (valor)
// console.log($('#novo').val());
// ---------------------- Pegar o conteúdo do nome do elemento ('name') -------------------
// usando a função Attr, para buscar atributos desse elemento
// console.log($('#novo').attr('name'));
//podemos usar para pegar o proprio value
// console.log($('#novo').attr('value'));

// para só tirar um item da lista 1 sem ter que tirar o da lista 2 também
// assim ira sumir só o item2 da lista 1

// $('#lista1 > .item2').hide();
//outro meio \/
// let lista1 = $('#lista1');

// let body = $('body');
// console.log(body.children("#lista2"));

//na lista 1 ache o item 2 e esconda
// lista1.find(".item2").hide();

// com a função children, fará com que pegue todos os filhos, e só os filhos, não vai além, do elemento
// console.log(lista1.children().fadeOut());

// temos a função find(), que faz com que a gente busque por um descendente desse elemento 
// ele vai mais profundo( filho, neto, bisneto)

// let jq = $('#lista1');
// // com essa expressão abaixo ele retorna o Jquery, e, se fizer let jq = $("ul"); retorna o jquery e 
// //em seguida uma função com o elemento
// console.log($());

// -------------------------- ENCADEAMENTO ---------------------------
// console.log(jq);

// let jq = $('#lista1').css('color','red').slideUp(2000)
//                      .slideDown(1000)
//                      .fadeOut(1000)        
//                      .fadeIn(1000)
// console.log(jq);

//se fosse essa mesma funcionalidade acima só utilizando JScript

// let objeto = {
//     print10: function() {
//         console.log(10);
//         return this;
        
//     },
//     print20: function() {
//         console.log(20);
//         return this;
//     }
// }

// let eleMesmo = objeto.print10();
// eleMesmo.print20();

// pode fazer também
// aparecerá 10 20 10 20
// objeto.print10().print20().print10().print20();
//Jquery é um conjunto muito grande de funções, toda função que ele executa ele retorna o proprio objeto.
// então pode em seguida encadear outras e outras funções, isso é encadeamento

// -------------------------- LENDO O CONTEÚDO DE UM ELEMENTO -----------------------------
// pegar o texto
// console.log($('h1').text());
//se utilizar console.log($('h1').html()); ele também pegará MinhaLista1
// só pega oque esta escrito no conteudo dos elementos filhos também
// console.log($('#lista1').text());
// pega todo o conteudo do elementos dos filhos do elemento que foi escolhido
// console.log($('#lista1').html());
// console.log($('.title').html());

// --------------------- Pegar o valor do ELEMENTO -----------------------
// Existe mais uma maneira de pegar o conteúdo html, tentar pegar o conteudo do value, que fica 
// como default na caixa do input, o text e o html não conseguirão pegar, utilizamos a função val() (valor)
// console.log($('#novo').val());
// ---------------------- Pegar o conteúdo do nome do elemento ('name') -------------------
// usando a função Attr, para buscar atributos desse elemento
// console.log($('#novo').attr('name'));
//podemos usar para pegar o proprio value
// console.log($('#novo').attr('value'));

// console.log($('h1').text("Lista de Compras"))
// $('h1').text("Lista de Compras");

// ---------------- Modificando o conteúdo e caracteristicas dos elementos ------------ //
// se pegar um elemento que tenha filhos e substituir tanto o html quanto o texto,
// por exemplo
// console.log($('#lista1').text('Item'));
// console.log($('#lista1').html('Item'));
// a mudança no HTML terá que ser substituida refazendo a propria estrutura do html
// como o exemplo abaixo
// e a função text substitui o texto do conteudo após o elemento e não a estrutura HTML dele
// console.log($('#lista1').html('<li>Novo item 1</li> <li>Novo Item 2</li>'));
// ------ Mudar os atributos html, e não as tags, tem que colocar outro argumento na função
//do atributo, que sera o novo valor
// console.log($('#novo').attr('name','novoNome'));

//Criar um novo atributo para um elemento, porém vai para todos os elementos li
// console.log($('li').attr('name','Nome'));
// se quiser separados, terá que criar uma função no novo argumento para
// ir incrementando e cada um ficar com um numero diferente
//Para cada li incrementar um i após o texto 'item '
// console.log($('li').attr('name', function(i) {
//     return 'item ' + i;
// }))
//caso eles ja tenham o nome setado pro item, e só queira incrementar o número
// faz assim (oValue (original value é no caso o valor que ja foi setado no html > name))
//nesse exemplo é "name = "Item""
$('li').css('color','blue').attr('name', (i, oValue) => {return oValue + i;});
$('input').attr('maxlength', 5).attr('type','password');

