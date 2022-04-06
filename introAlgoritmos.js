// Introduccion ALGORITMOS

// algoritmo para encontrar mayor entre 2 numeros

let encontrarMayor = (num1, num2) => {
    // if(num1 > num2){
    //     return num1
    // }else{
    //    return num2
    // }
  
    return num1 > num2 ? num1 : num2;
  };
  
  // como harian para que con esa funcion sacar el mayor entre 3 numeros
  // console.log(encontrarMayor(15, 25))
  // console.log( encontrarMayor(encontrarMayor(67, 67) , 98) )
  
  let numeros = [2, 15, 7, 48, 1, 1, 48, 16, 21];
  // Introduccion al objeto Math
  
  console.log(Math.max(...numeros));
  console.log(Math.max( 5, 9, 12, 16));
  console.log(Math.min( 5, 9, 12, 16));
  
  
  // encontrar el numero mayor de un array
  // encontrar el numero menor de un array
  
  let mayorDeUnArreglo = (arr) => {
    let mayor = arr[0];
    let menor = arr[0];
    let minMax = [];
  
    for (let i = 0; i < arr.length; i++) {
      // mayor < arr[i] ? mayor = arr[i] : menor > arr[i] ?  menor = arr[i] : menor
  
      if (mayor < arr[i]) {
        mayor = arr[i];
      } else if (menor > arr[i]) {
        menor = arr[i];
      }
    }
    
    minMax.push(mayor, menor)
  
    return minMax
  
  };
  mayorDeUnArreglo(numeros)
  
  let numerosMaxyMin = mayorDeUnArreglo(numeros)
  console.log( numerosMaxyMin )