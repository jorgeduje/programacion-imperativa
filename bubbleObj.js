// BUBBLE SORT CON ARRAY DE OBJETOS Y REPASO ANTES DEL FINAL

// const edades2 = [33, 27, 34, 30, 34, 25];

// // CREAR UNA FUNCION PARA ORDENAR LAS EDADES DE FORMA ASCENDENTE y las retorne

// let ordenar2 = (arr) => {
//   let auxiliar;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         auxiliar = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = auxiliar;
//       }
//     }
//   }

//   return arr
// };
// console.log(edades2);
// console.log( ordenar2(edades2))

const edades = [33, 27, 34, 30, 34, 25];

// CREAR UNA FUNCION PARA ORDENAR LAS EDADES DE FORMA ASCENDENTE

let ordenar = (arr) => {
  let auxiliar;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        auxiliar = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = auxiliar;
      }
    }
  }
};
console.log(edades);
ordenar(edades);
console.log(edades);

const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];

// let ordenarObjeto = (arr) => {
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j].edadTitular < arr[j + 1].edadTitular) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr
// };

// console.log(arrayCuentas)
// let arrayOrdenadoPorTitular = ordenarObjeto(arrayCuentas)
// console.log(arrayOrdenadoPorTitular)

let ordenarObjeto = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].edadTitular < arr[j + 1].edadTitular) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

// console.log(arrayCuentas);
// ordenarObjeto(arrayCuentas);
// console.log(arrayCuentas);

let matriz = [
  [12, 5, 11],
  [15, 3, 7],
  [1, 22, 8],
];

// CREAR UNA FUNCION QUE RETORNE LA SUMATORIA DE LA FILA EN LA POSICION 1

let sumaFila1 = (arr) => {
  let resultado = 0;
  // CUANDO RECORRO UNA FILA LE PIDO LA LONGITUD A ESA FILA
  for (let i = 0; i < arr[1].length; i++) {
    resultado += arr[1][i];
  }

  return resultado;
};

let resultadoFila1 = sumaFila1(matriz);
console.log(resultadoFila1);

let matriz2 = [
  [12, 5, 11],
  [15, 3, 7],
  [1, 22, 8],
];

// CREAR UNA FUNCION QUE RETORNE EL TOTAL DE MULTIPLICAR TODOS LOS ELEMENTOS
// DE LA COLUMNA EN LA POSICION 0 QUE SEAN MULTIPLOS DE 4

let recorrerCol = (arr) => {
  let resultado = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] % 4 === 0) {
      resultado *= arr[i][0];
    }
  }

  return resultado;
};

console.log(recorrerCol(matriz2));

let matriz3 = [
  [12, 5, 11],
  [15, 3, 7],
  [1, 22, 8],
];

// CREAR UNA FUNCION QUE RETORNE LA SUMA De TODOS LOS ELEMENTOS DE LA MATRIZ

let reccorrerMatriz = (arr) => {
  let resultado = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      resultado += arr[i][j];
    }
  }

  return resultado;
};

console.log(reccorrerMatriz(matriz3));

// PRINCIPAL , EMPIEZA FILA 0 COL 0 , TERMINA FILA ultima COL ultima
// SECUNDARIA EMPIEZA EN FILA 0 COL ULTIMA Y TERMINA FILA ULTIMA COL 0
let matriz4 = [
  [12, 5, 11],
  [15, 3, 7],
  [1, 22, 8],
];

let principal = (arr) => {
  let resultadoPrincipal = 0;
  let resultadoSecundaria = 0;
  for (let i = 0; i < arr.length; i++) {
    resultadoPrincipal += arr[i][i];
    resultadoSecundaria += arr[i][arr.length - (1 + i)];
  }

  console.log(resultadoPrincipal);
  console.log(resultadoSecundaria);
};
principal(matriz4);
