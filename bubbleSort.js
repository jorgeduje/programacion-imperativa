// BUBBLE SORT / ORDENAMIENTO BURBUJA

let numeros = [4, 10, 2, 1, 18, 15, 9, 3];

let algo = [ 5, 1, 4, 12, 17, 3]

let palabras = [ "hola", "como", "HOLA", "estas", "zebra", "jirafa"] // LAS MAYUSCULAS menos peso

let objetos = [ {}, {}, {} ]


let ordenar = (arr) => {
  let temporal;

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {
        // MAYOR QUE ( ASCENDENTE ) y MENOR QUE ( DESCENDENTE )
      if (arr[j] > arr[j + 1]) {

        temporal = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporal;

        // SWIPPING de VARIABLES
        // [ arr[j], arr[j + 1] ] = [arr[j +1 ], arr[j]  ]

      }
    }
    console.log("estoy en la vuelta numero " + (i ))
    console.log(arr);
  }
};

ordenar(palabras)
console.log(palabras)
