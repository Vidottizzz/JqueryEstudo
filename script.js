// para só tirar um item da lista 1 sem ter que tirar o da lista 2 também
// assim ira sumir só o item2 da lista 1

// $('#lista1 > .item2').hide();
//outro meio \/
// let lista1 = $('#lista1');
let body = $('body');
console.log(body.children("#lista2"));
//na lista 1 ache o item 2 e esconda
// lista1.find(".item2").hide();
// com a função children, fará com que pegue todos os filhos, e só os filhos, não vai além, do elemento
// console.log(lista1.children().fadeOut());

// temos a função find(), que faz com que a gente busque por um descendente desse elemento 
// ele vai mais profundo( filho, neto, bisneto)
