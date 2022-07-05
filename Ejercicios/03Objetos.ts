
let persona:{nombre:string,apellido:string,edad:number,accion():string}={
    nombre:"Javier",
    apellido:"Gonzalez",
    edad:37, 
    accion(){
        return "hola"
    }
}

//tipos  

type Asignaturas={
    matematicas:boolean,
    naturaleza:boolean, 
    fisica:boolean, 
    dibujo:boolean , 
    lenguaje:boolean, 
    musica:boolean, 
    activoActual:()=>boolean
}

//creamos un objeto a partir del tipo  

let antonio:Asignaturas = {
    matematicas:true, 
    naturaleza:false, 
    fisica:true, 
    dibujo:false, 
    lenguaje:true, 
    musica:true,
    activoActual(){
        return true
    }
}

