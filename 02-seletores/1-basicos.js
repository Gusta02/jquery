$(function (){
    //seletor de elementos
    $("b").text("jQuery Essentials");


    //console.warn($("b")[0].offsetTop); //para medir a distancia entre o objeto e o topo do doc.
    //console.log($("b")); //exibe informações sobre o objeto.

    $(".jquery").css("color",  "red"); //muda a cor somende dos objetos dessa classe.

    $("#jquery").text("id = jquery"); //outro tipo de seletor, mas n aconselhado a usar no projeto.

   // $("*").css("border", "1px solid #ccc"); //seleciona todos os elementos

    $("div *").css("border", "1px solid #ccc"); //seleciona todos os elementos filhos.

    $(".jquery, b").css({     //apenas o elemento b recebe.
        background: "blue",
        color: "red",
        'boder-radius': "4px",
        padding: "10px",
        "font-size": "1.4em"

    });

    $("b").add("p").css("font-size", "2em"); //b e p, receberam a formatação.

});


