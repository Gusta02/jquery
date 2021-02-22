//Forma Padrão de inicializar o jQuery

//$(document).ready(function (){
    //$(".jquery_essentials").html("jQuery Iniciado");
//})


//Forma padrão de inicializar o jQuery simplificado
// $(function(){
//     $(".jquery_essentials").html("jQuery Iniciado com Gatilho");
// })


//Carregando antes de outra LIB

JQuery(function ($){
    $(".jquery_essentials").html("jQuery Antes de outra Lib ");
})


