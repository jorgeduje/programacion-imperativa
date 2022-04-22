// ULTIMO ESFUERZO, VAMOOOOSSS 💪💪💪

let decirEdad2 = function (parametro) {
  return this.edad + parametro;
};

let persona = {
  edad: 29,
  apellido: "perez",
  decirEdad: decirEdad2,
};

// console.log( persona.decirEdad(2) )

// modificar la propiedad edad sumandole 1

persona.edad += 1;
persona.nombre = "Juan";

// console.log(persona.edad)

let array = [2, 5, 12, 17];

// DECREMENTAR EN 1 CADA UNO DE LOS ELEMENTOS DE MI ARR y retornarlo

let recorrerArr = (arr) => {
  let arrNuevo = [];

  for (let i = 0; i < arr.length; i++) {
    arrNuevo.push(arr[i] - 1);
  }

  return arrNuevo;
};

// console.log(array)
// let arrDecrementado =  recorrerArr(array)
// console.log(arrDecrementado)

// console.log(array)

let estudiantes = [
  {
    nombre: "juan",
    edad: 12,
  },
  {
    nombre: "jhon",
    edad: 22,
  },
  {
    nombre: "teresa",
    edad: 42,
  },
];

let incrementarEdad = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].edad += 1;
  }
};

incrementarEdad(estudiantes);

// console.log(estudiantes)

let numero = 2;
// if( numero < 2){

//     console.log("es menor que 2 ")

// }else if( numero > 2){

//     console.log("es mayor que 2")

// }else{
//     console.log("no valido nada mas")
// }

let estudiantes2 = [
  {
    nombre: "zaul",
    edad: 12,
  },
  {
    nombre: "antonella",
    edad: 22,
  },
  {
    nombre: "teresa",
    edad: 42,
  },
];

// CREAR UNA FUNCION QUE ORDENE EL ARREGLO ESTUDIANTES2 EN BASE AL NOMBRE DE FORMA ASCENDENTE

let ordenarEstudiantes = (arreglo) => {
  let temp;
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length - 1; j++) {
      if (arreglo[j].edad > arreglo[j + 1].edad) {
        temp = arreglo[j];
        arreglo[j] = arreglo[j + 1];
        arreglo[j + 1] = temp;
      }
    }
  }
};

ordenarEstudiantes(estudiantes2);

console.log(estudiantes2);

// ULTIMO ESFUERZO, VAMOOOOSSS 💪💪💪

// CREAR UNA MATRIZ DE 3 X 3

let matriz = [
  [25, 11, 31],
  [9, 15, 27],
  [29, 11, 14],
];

let principal = 0

for (let i = 0; i < matriz.length; i++) {

   principal *=  matriz[i][i];
   

}



let resultado = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > 25) {
      resultado += matriz[i][j];
    }
  }
}

for (let i = 0; i < matriz.length; i++) {
  matriz[i][1];
}

for (let i = 0; i < matriz[2].length; i++) {
  matriz[2][i];
}
