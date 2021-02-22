$(function() {
    var text = $(".j").text();
    var html = $(".j").html();

    $(".e").append("<p>"+ text +"</p>");
    $(".e").append("<p>"+ html +"</p>");
    $(".a").appendTo($(".e"));
    $("<p><b>#BoraProgramar!</b></p>").appendTo($(".e"));

    $(".e").prepend("<h2>Resultados:</h2>");
    $("<p>Empeplos:</p>").prependTo($(".e p:first"));
});