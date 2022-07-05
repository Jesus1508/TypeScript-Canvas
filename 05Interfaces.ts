
interface Persona{
    nombre:string, 
    apellido1:string , 
    apellido2:string, 
    edad:number, 
    isCasado:boolean , 
    running():boolean
}

let susana:Persona ={
    nombre:"Susana",
    apellido1:"Gonzalez",
    apellido2:"Jimenez",
    edad:34, 
    isCasado:true, 
    running(){
        return true 
    }
}

class Personas implements Persona{
     
     nombre:string 
     apellido1:string
     apellido2:string 
     edad:number 
     isCasado:boolean  
     empleo:string

     constructor(nombre:string,apellido1:string,apellido2:string,edad:number,isCasado:boolean,empleo:string){

        this.nombre=nombre 
        this.apellido1=apellido1 
        this.apellido2=apellido2 
        this.edad=edad  
        this.isCasado=isCasado 
        this.empleo=empleo

     }
     public running(){
         return true
     }
}

//Interfaces en funciones 

interface Movimiento{
    (valor:boolean):boolean
}

 let pajaro:Movimiento;
     pajaro=function(valor:boolean):boolean{
         return valor
     }

     console.log(pajaro(true))


