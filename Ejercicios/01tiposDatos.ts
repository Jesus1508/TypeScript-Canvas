//Booleans  


let esHombre:boolean=true
console.log(typeof esHombre)

//Number (enteros y decimales)

let numero:number=35
numero=4

//Strings
let frase:string="Estoy estudiando typescript"

//Any 

let frase2:any="Soy un string"
frase2=45 
frase2=true 

//Tuplas y Array 

let lista:string[]=['lechuga','tomate','cebolla']
let tupla:[string,number,boolean]=['casa',34,true] 

tupla.push('sandia')
console.log(tupla)

//Enum o enumerables 

enum Podium {
    Spain=10,
    Alemania,
    Rusia=2,
    Italia, 
    Argentina,
    EEUU
}

let posicion:number=Podium.Italia

console.log(posicion)

//Void es vacio  

function saludo(palabra:string):void {
     console.log(`${palabra}`)
    
}

saludo("buenos dias")

//Never  

// function error(frase:string):never {
//     throw new Error(frase)
// }

// error("Error , no pongas eso en la pagina principal")

//Null y undefined  

let nada:undefined=undefined  
let nulo:null=null