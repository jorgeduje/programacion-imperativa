const prompt = require("prompt-sync")({ sigint: true });

// FELIZ VIERNESSSSSSSS 🎉🎉🎉🎉
// CIERRE DE SEMANA  VARIABLES Y FUNCIONES 👌

let sumar = function () {
  return 5 + 2;
};

let restar = () => {};

let saludar = (persona) => {
  return ` hola ${persona}`;
};

// let nombre = prompt("dime tu nombre")

// console.log( saludar( nombre ) )

let multiplicar = (num1, num2) => {
  return num1 * num2;
};

console.log(multiplicar(3, sumar()));

// let numeroDelUsuario = prompt("dame un numero")

// console.log( multiplicar(5, numeroDelUsuario) )

// TIENE SCOPE GLOBAL
let edad = 50;

let sumarEdad = () => {
  // TIENE SCOPE LOCAL
  let años = 12;
};

// PRIMER EJERCICIO
// CREAR UNA FUNCION QUE NOS DIGA SI UN NUMERO ES PAR

let numeroEsPar = (num) => {
    
  return num % 2 == 0

};

console.log(numeroEsPar(3));

// SEGUNDO EJERCICIO
// CREAR UNA FUNCION PARA CONTABILIZAR LOS SEGUNDOS QUE PASARON
// DESDE QUE EMPEZO EL DIA HASTA LA HORA QUE LE INDIQUEMOS

// 15:45
// 00:00

let contadorSegundos = (horas, minutos)=>{

    let segundos = horas *60 *60
    let segundos2 = minutos *60
    let resultado = segundos + segundos2
    return resultado

}

console.log( contadorSegundos(1, 2) )



let numero = 25 + 10
    numero = 7
    numero = 2 + 9
    numero = numero + 3
    numero += 4

console.log( numero )

