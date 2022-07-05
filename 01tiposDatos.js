//Booleans  
var esHombre = true;
console.log(typeof esHombre);
//Number (enteros y decimales)
var numero = 35;
numero = 4;
//Strings
var frase = "Estoy estudiando typescript";
//Any 
var frase2 = "Soy un string";
frase2 = 45;
frase2 = true;
//Tuplas y Array 
var lista = ['lechuga', 'tomate', 'cebolla'];
var tupla = ['casa', 34, true];
tupla.push('sandia');
console.log(tupla);
//Enum o enumerables 
var Podium;
(function (Podium) {
    Podium[Podium["Spain"] = 10] = "Spain";
    Podium[Podium["Alemania"] = 11] = "Alemania";
    Podium[Podium["Rusia"] = 2] = "Rusia";
    Podium[Podium["Italia"] = 3] = "Italia";
    Podium[Podium["Argentina"] = 4] = "Argentina";
    Podium[Podium["EEUU"] = 5] = "EEUU";
})(Podium || (Podium = {}));
var posicion = Podium.Italia;
console.log(posicion);
//Void es vacio  
function saludo(palabra) {
    console.log("" + palabra);
}
saludo("buenos dias");
//Never  
// function error(frase:string):never {
//     throw new Error(frase)
// }
// error("Error , no pongas eso en la pagina principal")
//Null y undefined  
var nada = undefined;
var nulo = null;
