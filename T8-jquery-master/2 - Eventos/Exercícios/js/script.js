$(function () {

    $("#titulo, #sinopse, #texto, #concepcao, #direcao, #livro, #autor, #moderador, #curadoria, #autor, #artista, #elenco, #artistaconvidados, #duracao, #classificacao, #valorentrada, #entradafranca").hide();

    $("#eventType").change(function () {
        let selected = $("#eventType :selected").val();

        if (selected == "Teatro") {
            $("#titulo, #sinopse, #texto, direcao, #elenco, #classificacao, #duracao, #valorentrada, #entradafranca").show();
            $("#concepcao, #livro, #autor, #moderador, #curadoria, #autor, #artista, #artistaconvidados").hide();
            
        } else if (selected == "Cinema") {
            $("#titulo, #sinopse, #direcao, #elenco, #duracao, #classificacao, #valorentrada, #entradafranca").show();

            $("#texto, #concepcao, #livro, #autor, #moderador, #curadoria, #autor, #artista, #artistaconvidados").hide();

        } else if (selected == "Debate Literário") {
            $("#titulo, #livro, #autor, #moderador, #duracao, #classificacao, #entradafranca").show();
            $("#sinopse, #texto, #concepcao, #direcao, #curadoria, #autor, #artista, #elenco, #artistaconvidados, #valorentrada").hide();

        } else if (selected == "Dança") {
            $("#titulo, #sinopse, #concepcao, #direcao, #elenco, #duracao, #classificacao, #valorentrada, #entradafranca").show();

            $("#texto, #livro, #autor, #moderador, #curadoria, #autor, #artista, #artistaconvidados").hide();

        } else if (selected == "Artes visuais e exposições") {
            $("#titulo, #sinopse, #curadoria, #artistaconvidados, #classificacao, #entradafranca").show();
            
            $("#texto, #concepcao, #direcao, #livro, #autor, #moderador, #autor, #artista, #elenco, #duracao#valorentrada").hide();

            $("#free").prop("checked", true);
            $("#free").prop("disabled", true);

        } else {
            $("#titulo, #sinopse, #artista, #classificacao, #valorentrada, #entradafranca").show();
            
            $("#texto, #concepcao, #direcao, #livro, #autor, #curadoria, #autor, #elenco, #artistaconvidados, #duracao").hide();

        }
    });

    $("#free").change(function () {
        if ($(this).prop("checked") == true) {
            $("#price").prop("disabled", true);
        } else {
            $("#price").prop("disabled", false);
        }
    });

    $("#title, #synopsis, #writer, #conception, #director, #book, #author, #moderator, #curator, #band, #classification, #price"
    ).css("border", "1px solid gray");

    $("form").submit(function (e) {
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