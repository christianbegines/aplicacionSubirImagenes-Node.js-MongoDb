/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Funcion que modula como reasigna el valor en el html
 * @param {type} html
 * @param {type} parametros
 * @returns {nm$_render_view.module.exports.html_string|nm$_render_view.render.html_string|nm$_render_view.exports.html_string}
 */
function render(html,parametros){
    var html_string=html.toString();   
    var variables=html_string.match(/[^\{\}]+(?=\})/g);              
    var nombre=" ";
    
    for (var i = variables.length-1; i>=0 ; i--) {
        var variable=variables[i];          
        html_string=html_string.replace("{"+variables[i]+"}",parametros[variable]);
    };
    return html_string;
}
module.exports.render=render;

