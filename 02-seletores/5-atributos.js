$(function(){
    $("[class]").css("background", "#ccc");

    $("[data-upinside='true']").css("background", "#006699");

    $("[title]").css("background", "red");

    $("[title='UpInside']").css("background", "green");

    $("[class^='jquery']").css("background", "#0099ff"); // usa o "^" para selecionar tudo que se inicia com o atributo.

    $("[class$='div']").css("font-weight", "bold"); // usa o "$" para selecionar tudo que se termina com o atributo. ps. tomar cuidado com a caixa alta ou baixa

    $("[class*='r']").css("font-weight", "normal"); // usa o "*" para selecionar todos as classes q possuem a letra R (nesse exemplo)

    $("[class~='jquery']").css("text-transform", "uppercase");

    $("[class|='jquery-essentials']").css("border-bottom", "3px solid red");

    $("[class*='jquery'][data-upinside]").css("color", "pink");

});