var A = prompt("Entre com o valor A:");
var B = prompt("Entre com o valor B:");
var C = prompt("Entre com o valor C:");

var coeficiente1;
var coeficiente2;

var delta = (B * B) - 4 * A * C;

if(delta < 0 ) {
    document.write("Delta negativo, raízes irreais.")
} else {
    document.write("Delta positivo, raízes diferentes.")

    coeficiente1 = ( -B + Math.sqrt(delta)) / ( 2 * A );
    coeficiente2 = ( -B - Math.sqrt(delta)) / ( 2 * A );

    document.write("X' = " + coeficiente1 + "<br/>")
    document.write("X' = " + coeficiente2 + "<br/>");
}