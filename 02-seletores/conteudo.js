$(function (){
    $("p:parent").css("background", "red"); // seleciona todos os paragrafos que possuem conteudo.

    $("p:empty").html("<b>Este esta vazio</b>"); // seleciona todos os paragrafos vazios.

    $("p:contains('Essentials')").css("color", "#fff"); // pesquisa e Seleciona todos os conteudos com a palavra "Essentials".

    $("p:has('b')").text("É esse aqui"); // pesquisa e seleciona o elemento filho "b", do paragrafo.
});