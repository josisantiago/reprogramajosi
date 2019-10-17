//Vamos fazer uma PokeDex! Utilizando a seguinte url, https://pokeapi.co/api/v2/pokemon/?limit=151, crie uma lista com o nome dos 151 pokemons da primeira geração. No clique de um item da lista, um modal com informações mais completas deve ser mostrado. Essas informações podem ser obtidas utilizando o endereço da api que é retornado junto com a lista de pokemons. As informações mostradas no modal ficarão a seu critério.

$(function () {
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/?limit=151",
        dataType: "json",
        success: function (data) {
            data.results.forEach(function (item, indice) {
                console.log(indice);
                let html = '<li class="list-group-item list-group-item-danger">' +
                    '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">(' + (indice + 1) + ') ' + item.name + '</h5></div>' +
                    '<small><a href="#" class="detalhes" data-api="' + item.url + '" >Detalhes</a></small>' +
                    '</li>';

                if (indice >= 0 && indice < 50) {
                    $('.first-ul').append(html);
                } else if (indice >= 50 && indice < 100) {
                    $('.second-ul').append(html);
                } else {
                    $('.third-ul').append(html);
                }
            })

            $('.detalhes').click(function () {
                alert('em construção');
            })
        },
        error: function () {
            alert('Xiiiiiiiiiiiiiiiiiiiiiiiiiiii....................................');
        }
    })
})  
