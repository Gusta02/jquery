$(function (){
    $(".jquery_essentials").html("jQuery Antes de outra Lib ");

    console.group("Mensagens Gerais")
    console.log("jQuery Essentials"); //acontecerá assim que carregar.
    console.info("o jquery foi carregado com sucesso"); //exibe uma informação
    console.warn("um alerta"); //exibe um alerta
    console.error("um erro"); //exibe um erro
    console.groupEnd(); // finaliza um agrupamento

    var cadastro = false;


    console.group("cadastro de usuarios"); // agrupamento
    console.info("cadastro iniciado");

    if (cadastro === true){

        console.log("cadastro realizado")

    }else{

        console.warn("Erro ao cadastrar")

    }

    //console.assert(cadastro === true, "cadastro não realizado"); // condição

    console.groupEnd();

})


