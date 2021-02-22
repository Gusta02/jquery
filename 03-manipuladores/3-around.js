$(function () {
    //$("p").wrap("<div>"); //ira insirir cada paragrafo dentro de uma div

    $("p").wrapAll("<div>"); // ira inserir todos os paragrafos em uma unica div

    $("p").wrapInner("<span>");

    $("p").unwrap("p");

    $("p").wrap("<h2>");
});