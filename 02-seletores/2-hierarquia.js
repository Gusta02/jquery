$(function(){
    $("div p").css("color", "red"); // objetos filhos

    //$("article > p").css("color", "blue"); // objetos filhos diretos

    $("article > *").css("color", "blue"); // Todos os objetos filhos de article.

    //$("div + p").css("background", "yellow"); // Seleciona os objetos filhos do div + os do p.

    $("p + a").css("background", "yellow"); // Os objetos tem que ser proximos.
});


