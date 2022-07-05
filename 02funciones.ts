//funcion declarada
function saludo(frase:string):string {
   return `${frase}`
}
console.log(saludo("Buenos dias"))

//función expresada 

const despedida=function(despedida:string):string{
    return `${despedida}`
}
console.log(despedida("Hasta luego"))

//función flecha 

const position=(posY:number):number=>{
    return posY
}
console.log(position(8))

//suma con funcion flecha  

const suma=(num1:number,num2:number):string=>{
    return `${num1 + num2}`
}

console.log(suma(5,7))

//parametros opcionales o por defecto 

function salto(posY:number=56,posX?:number):number{
    return posY
}
console.log(salto())

//pasando arrays por medio del operador rest ... 

function animales(...listaAnimales:string[]):string[]{
   return listaAnimales
}

console.log(animales("pato","gallina","cebra","buey","raton"))