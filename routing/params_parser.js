/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Funcion que modula el parse de las letras para mostrarlas.
 * @param {type} request
 * @returns {unresolved}
 */
function parse(request) {
    var arreglo_parametros = [];
    var parametros = {};
    if (request.url.indexOf("?") > 0) {
        //separa la "/" de la url
        var url_data = request.url.split("?");
        //guarda en un array los diferentes parametros
        arreglo_parametros = url_data[1].split("&");
    }
    for (var i = arreglo_parametros.length - 1; i >= 0; i--) {

        var parametro = arreglo_parametros[i];
        //divide el parametro de su valor
        var param_data = parametro.split("=");

        parametros[param_data[0]] = param_data[1];

    }
    ;

    return parametros;

}
module.exports.parse = parse;
