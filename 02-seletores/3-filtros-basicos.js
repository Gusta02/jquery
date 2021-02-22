$(function(){
    $("p:not('.p')").css("font-weight", "bold"); //todos os elementos que n tiverem a class p, receberam a formatação.

    $("p:first").css("color", "red"); // somente o primeiro elemento recebera a formatação.

    $("p:last").css("color", "red"); // somente o ultimo elemento recebera a formatação.

});


