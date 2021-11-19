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

// console.log(jq);

let jq = $('#lista1').css('color','red').slideUp(2000)
                     .slideDown(1000)
                     .fadeOut(1000)
                     .css('color','blue')
                     .fadeIn(1000)
console.log(jq);

//se fosse essa mesma funcionalidade acima só utilizando JScript

let objeto = {
    print10: function() {
        console.log(10);
        return this;
        
    },
    print20: function() {
        console.log(20);
        return this;
    }
}

let eleMesmo = objeto.print10();
eleMesmo.print20();

// pode fazer também
// aparecerá 10 20 10 20
// objeto.print10().print20().print10().print20();
//Jquery é um conjunto muito grande de funções, toda função que ele executa ele retorna o proprio objeto.
// então pode em seguida encadear outras e outras funções, isso é encadeamento