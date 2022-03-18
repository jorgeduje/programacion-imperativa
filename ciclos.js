const prompt = require("prompt-sync")({ sigint: true });

// CICLOS / BUCLES 😃

// FOR / WHILE / DO WHILE

// CICLO FOR
// INICIALIZACION / CONDICION / MODIFICADOR
// ITERAR

let contarHastaTres = ()=>{

    for(let i = 1 ; i <= 3 ; i++){

        console.log(i)

    }

}

// WHILE
// INICIALIZACION / CONDICION / MODIFICADOR

// let j = 4
while( j <= 3 ){

    console.log(j)

    j++
}

// DO WHILE

// let h = 12

do{

    console.log(h)
    h++

}while( h < 7)

let sumarNumeros = () => {
  let resultado = 0; 

  for (let i = 1; i <= 2; i++) {

    console.log(resultado);
    resultado = resultado + i;
  }

  return resultado;
};

console.log(sumarNumeros());
// EJERCICIOS
// 1) Hacer un código que nos muestre los números del 0 al 10.
// 2) Hacer un código en el cual se visualice una
// cuenta de 1 a 10, y a la vez, una cuenta inversa de 10 a 1.




let contarYdescontar = ()=>{

    for(let i = 1 ; i <= 10 ; i++){

        console.log("-------")
        console.log( i )
        console.log(11 - i)
        console.log("-------")
    }

}

contarYdescontar()

// 3) crear una funcion que receiba un numero por parametros y que muestre por consola
// todos los impares que hay en entre el 0 y ese numero, y sumarle 5 a cada uno

let mostraImpares = ( num )=>{


    for(let i = 1 ; i < num ; i++ ){

       if( i % 2 !== 0 ){

        console.log(i + 5)

       }

    }

}

mostraImpares(7)


