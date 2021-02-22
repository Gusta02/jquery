$(function(){
    $("p:not('.p')").css("font-weight", "bold"); //todos os elementos que n tiverem a class p, receberam a formatação.

    $("p:first").css("color", "red"); // somente o primeiro elemento recebera a formatação.

    $("p:last").css("color", "red"); // somente o ultimo elemento recebera a formatação.

    $("p:even").css("background", "#eee"); //seleciona todos os elementos mudando o fundo. "even", seleciona apenas os valores pares do indice.
    $("p:odd").css("background", "#ccc"); //seleciona todos os elementos mudando o fundo. "even", seleciona apenas os valores impares do indice.

    $("p:eq(4)").text("JQuery Essentials"); //seleciona um elemento em expecifico, no caso desse exemplo é selecionado o 4 elemento.
    $("p:gt(4)").text("Seletores GT"); //Seleciona todos os elementos abaixo de um determinado valor, nesse exemplo ele modifica todos os elementos abaixo do 4(quarto) elemento.
    $("p:lt(4)").text("Seletores LT"); // inverso do seletor GT, ele seleciona todos os elementos acima do elemento informado.

    $(".list :header").css({  //sempre q tiver um header na lista é necessario dar um espaço entra "list" e ":header", para a formatação acontecer.
        "font-size":"1.4em",
        color: "#8888"
    })

    $(".list :header span").css("color", "blue");

    function animar_el(elemento){                       // função para animar elemento.
        $(elemento).fadeToggle(400, function (){
            animar_el(elemento);
        });
    }

    var num = 1;
    setInterval(function (){
        $(":animated").text(num);
        num ++
    }, 800); // inicia uma contagem.

    animar_el(".list span");

    $(":focus").css("background", "green");

    console.log($(":root"));
});


