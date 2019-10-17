//Faça um código jQuery para o site de restaurantes, que leia o arquivo restaurants.xml e após obter seus dados crie uma lista. Para cada tag \<restaurant>, crie um \<li> com o nome e endereço do restaurante. Mude a cor do item de acordo com o tipo de restaurante. Crie um link em cada item que direcione ao Google Maps, com o endereço especificado através da longitude e latitude.
$(function () {
    $.ajax({
        type: "GET",
        url: "./resources/restaurants.xml",
        dataType: "xml",
        success: function (data) {
            $(data).find('restaurant').each(function () {

                let classe = "list-group-item-light";
                if($(this).attr('type') == 'bar') {
                    classe = "list-group-item-dark";
                }

                let html = '<li class="list-group-item ' + classe +'">' +
                '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">' + $(this).attr('name') + '</h5>' +
                    '<p class="mb-1">' + $(this).attr("address") + '</p>' +
                    '<small><a href="http://maps.google.com/maps?q=' + $(this).attr('lat') + ',' + $(this).attr('lng') + '" target="_blank">Ver no mapa</a></small>' +
                '</li>';
                $("ul").append(html);
            });
        },
        error: function () {
            alert('Ocorreu um erro');
        }
    })
})