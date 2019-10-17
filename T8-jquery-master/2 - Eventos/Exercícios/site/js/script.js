$(function () {
    $("#titulo").hide();
    $("#sinopse").hide();
    $("#texto").hide();
    $("#concepcao").hide();
    $("#direcao").hide();
    $("#livro").hide();
    $("#autor").hide();
    $("#moderador").hide();
    $("#curadoria").hide();
    $("#autor").hide();
    $("#artista").hide();
    $("#elenco").hide();
    $("#artistaconvidados").hide();
    $("#duracao").hide();
    $("#classificacao").hide();
    $("#valorentrada").hide();
    $("#entradafranca").hide();

    $("#eventType").change(function () {
        let selected = $("#eventType :selected").val();

        if (selected == "Teatro") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").show();
            $("#concepcao").hide();
            $("#direcao").show();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#autor").hide();
            $("#artista").hide();
            $("#elenco").show();
            $("#artistaconvidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valorentrada").show();
            $("#entradafranca").show();
        } else if (selected == "Cinema") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").show();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#autor").hide();
            $("#artista").hide();
            $("#elenco").show();
            $("#artistaconvidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valorentrada").show();
            $("#entradafranca").show();
        } else if (selected == "Debate Literário") {
            $("#titulo").show();
            $("#sinopse").hide();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").show();
            $("#autor").show();
            $("#moderador").show();
            $("#curadoria").hide();
            $("#autor").hide();
            $("#artista").hide();
            $("#elenco").hide();
            $("#artistaconvidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valorentrada").hide();
            $("#entradafranca").show();
        } else if (selected == "Dança") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").show();
            $("#direcao").show();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#autor").hide();
            $("#artista").hide();
            $("#elenco").show();
            $("#artistaconvidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valorentrada").show();
            $("#entradafranca").show();
        } else if (selected == "Artes visuais e exposições") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").show();
            $("#autor").hide();
            $("#artista").hide();
            $("#elenco").hide();
            $("#artistaconvidados").show();
            $("#duracao").hide();
            $("#classificacao").show();
            $("#valorentrada").hide();
            $("#entradafranca").show();
            $("#free").prop("checked", true);
            $("#free").prop("disabled", true);
        } else {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#autor").hide();
            $("#artista").show();
            $("#elenco").hide();
            $("#artistaconvidados").hide();
            $("#duracao").hide();
            $("#classificacao").show();
            $("#valorentrada").show();
            $("#entradafranca").show();
        }
    });

    $("#free").change(function () {
        if ($(this).prop("checked") == true) {
            $("#price").prop("disabled", true);
        } else {
            $("#price").prop("disabled", false);
        }
    });

    $(
        "#title, #synopsis, #writer, #conception, #director, #book, #author, #moderator, #curator, #band, #classification, #price"
    ).css("border", "1px solid gray");

    $("form").submit(function () {
        let erro = false;
        if ($("#title").is(":visible") && $("#title").val() == "") {
            $("#title").css("border", "1px solid red");
            erro = true;
        }
        if ($("#synopsis").is(":visible") && $("#synopsis").val() == "") {
            $("#synopsis").css("border", "1px solid red");
            erro = true;
        }
        if ($("#writer").is(":visible") && $("#writer").val() == "") {
            $("#writer").css("border", "1px solid red");
            erro = true;
        }
        if ($("#conception").is(":visible") && $("#conception").val() == "") {
            $("#conception").css("border", "1px solid red");
            erro = true;
        }
        if ($("#director").is(":visible") && $("#director").val() == "") {
            $("#director").css("border", "1px solid red");
            erro = true;
        }
        if ($("#book").is(":visible") && $("#book").val() == "") {
            $("#book").css("border", "1px solid red");
            erro = true;
        }
        if ($("#author").is(":visible") && $("#author").val() == "") {
            $("#author").css("border", "1px solid red");
            erro = true;
        }
        if ($("#moderator").is(":visible") && $("#moderator").val() == "") {
            $("#moderator").css("border", "1px solid red");
            erro = true;
        }
        if ($("#curator").is(":visible") && $("#curator").val() == "") {
            $("#curator").css("border", "1px solid red");
            erro = true;
        }
        if ($("#band").is(":visible") && $("#band").val() == "") {
            $("#band").css("border", "1px solid red");
            erro = true;
        }
        if (
            $("#classification").is(":visible") &&
            $("#classification").val() == ""
        ) {
            $("#classification").css("border", "1px solid red");
            erro = true;
        }
        if ($("#price").is(":visible") && $("#price").val() == "") {
            $("#price").css("border", "1px solid red");
            erro = true;
        }

        if (erro == true) {
            alert("existem campos sem preencher");
            return false;
        }
    });
});