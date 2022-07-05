//funcion declarada
function saludo(frase) {
    return "".concat(frase);
}
console.log(saludo("Buenos dias"));
//función expresada 
var despedida = function (despedida) {
    return "".concat(despedida);
};
console.log(despedida("Hasta luego"));
//función flecha 
var position = function (posY) {
    return posY;
};
console.log(position(8));
//suma con funcion flecha  
var suma = function (num1, num2) {
    return "".concat(num1 + num2);
};
console.log(suma(5, 7));
//parametros opcionales o por defecto 
function salto(posY, posX) {
    if (posY === void 0) { posY = 56; }
    return posY;
}
console.log(salto());
//pasando arrays por medio del operador rest ... 
function animales() {
    var listaAnimales = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaAnimales[_i] = arguments[_i];
    }
    return listaAnimales;
}
console.log(animales("pato", "gallina", "cebra", "buey", "raton"));
