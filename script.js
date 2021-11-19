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
// $('li').css('color','blue').attr('name', (i, oValue) => {return oValue + i;});
// $('input').attr('maxlength', 5).attr('type','password');

// Não utilizaremos mais class para selecionar um elemento, vamos utilizar o atributo key
// console.log($('[key = 2]').remove());
//nas duas listas tem a mesma key, desse modo ira deletar as 2 keys iguais da lista1 e lista2
// para deletar uma faremos o exemplo abaixo, Na lista 1 irá deletar o key 2
// $('#lista1').find('[key = 2]').remove();

//------------ REMOVER ELEMENTOS DA TELA ---------------------
//removerá a lista toda
//$('#lista1').remove();
// desse modo removerá só os filhos do elemento, que é o empty, ou seja, deixar o elemento pai vazio
//$('#lista1').empty();
// o remove() permite que coloquemos um argumento, para remover um ou mais itens de um mesmo pai, ja o empty
//tira todos os filhos do pai, com o argumento no remove podemos escolher quais tiraremos
// $('li').remove('.item1 , .item2')

//------------- ADICIONAR ITENS A TELA ----------------------
// PARA adicionar itens podemos fazer como no exemplo que trocamos os li's da ul com 
//console.log($('#lista1').html('<li>Novo item 1</li> <li>Novo Item 2</li>'));
//mas isso ira substituir os itens, e não adicionar, para adicionar: 

// let lista1 = $('#lista1');

// let items = lista1.html();

// lista1.html(items + '<li>Teste</li>');

// ----------USANDO APPEND E PREPEND PARA ADICIONAR

//porém um jeito melhor de fazer isso é usando um método do Jquery chamado append (juntar)
// desse modo irá adicionar ao final da estrutura,

// let lista1 = $('#lista1');

// lista1.append("<li>Novo teste</li>");

//Já desse modo irá adicionar ao inicio da estrutura

// lista1.prepend('<li>Novo teste</li>');

// ----------- USANDO BEFORE E AFTER PARA ADICIONAR

// A Diferença entre o append e o prepend , é que o after coloca o elemento após elemento pai escolhido , fora dele
//e o before é que é antes do elemento pai escolhido, e pode colocar estrutura HTML dentro de todas
// funções,  por exemplo:

// lista1.after("<li>Novo teste</li>");
// lista1.before("<li>Novo teste</li>");

// let div = $('.rect');
// let nome = "henrique";
// let sobrenome = "Vidotti"

// div.after(nome, " ", sobrenome);
// div.after("<li>oi</li>");

// --------------- MODIFICANDO O CSS ------------------

// $('h1').addClass('bg-blue');

// setTimeout(() => {
//     $('h1').addClass('bg-blue')
// }, 1000)
// setTimeout(() => {
//     $('h1').removeClass('bg-blue')
// }, 3000)

// pra trocar de uma classe para outra podemos usar o toggle
// setTimeout(() => {
//     $('h1').toggleClass('bg-blue')
// }, 1000)
// setTimeout(() => {
//     $('h1').toggleClass('bg-blue')
// }, 3000)

 // vai colocar se não tiver, e vai tirar se tiver
 // mas se quiser fazer ele indo e voltando sem parar podemos usar o setInterval

//  setInterval(() => {
//      $('h1').toggleClass('bg-blue');
//  }, 300);

// OUTRO MODO DE PEgAR UM ELEMENTO DO CSS
// ele vai ler qual é a propriedade do elemento que CSS que escolher

// console.log($('h1').css('background-color'));

//Pode alterar o valor do elemento também utilizando a função css()
// console.log($('h1').css('font-size', 50));

//e para alterar mais de um elemento na função css() colocamos tudo dentro de chaves na estrutura de um objeto

// console.log($('h1').css({
//     'font-size': 50,
//     'background-color': 'blue'
// }));

// ----------- REDIMENSIONANDO ELEMENTOS ----------------

let box = $('.box');


box.append('largura:', box.width(), '<br>',
     'largura + padding:', box.innerWidth(), '<br>',
     'largura + padding + borda', box.outerWidth(), '<br>',
     'largura + padding + borda + margem:', box.outerWidth(true));

//PARA ALTERAR
box.outerWidth(600);

