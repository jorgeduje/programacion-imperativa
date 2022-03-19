
const prompt = require("prompt-sync")({ sigint: true });

// CIERRE SEMANA CLASE 9

// Algoritmo para convertir una cantidad de pesos a dólares.



let convertir = (cantidadPesos, precioDolar)=>{

    let resultado = cantidadPesos / precioDolar
    return resultado

}

convertir(500, 10) 

//Hacer un programa para calcular el promedio de 3 notas; 
//si el promedio es mayor que 7.5 retornar aprobado, de lo contrario, mostrar desaprobado.


let promedioAprobado = (nota1, nota2, nota3)=>{

    let suma = nota1 + nota2 + nota3
    let promedio = suma / 3
    if( promedio > 7.5 ){
        return " aprobad@"
    }else{
        return "desaprobad@"
    }

}

promedioAprobado(10,5,8) 


//Elaborar un programa que permita ingresar un número entero del 1 al 12 
// y muestre la tabla de multiplicar de dicho número.
// 1*1 = 1
// 1*2 = 2

let tablaMultiplicar = function( numero ){
    
    if(numero >= 1 && numero <= 12){

        for( let i = 1 ; i <= 10 ; i++ ){

            console.log(`${numero} X ${i} = ${i * numero} `)
        }
    }
}

tablaMultiplicar(11)


//Elaborar un programa que muestre la cantidad de números 
//pares e impares entre 10 números.

let paresEimpares = ( numero )=>{

    let contadorPares = 0
    let contadorImpares = 0

    for(let i = numero ; i <= (numero + 10) ; i++){

        if(i % 2 === 0){

            contadorPares = contadorPares + 1

        }else{
            contadorImpares = contadorImpares + 1
        }
    }

   return `la cantidad de pares es ${contadorPares} y de impares es ${contadorImpares}`

}

console.log( paresEimpares(7) ) 





