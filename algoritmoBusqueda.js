
let lista = [2, 5, 7, 12, 15, 21];


let buscar = 21;

const busqueda = (array, elemento) => {

  let izquierda = 0; // 6
  let derecha = array.length - 1; // 5

  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2); // 5

    if (array[medio].edad === elemento) { // 21 === 22
      return medio
    }
    
    if (array[medio] > elemento) { // 21 > 22
      derecha = medio - 1;
    } else { // 21< 22
      izquierda = medio + 1; 
    }
  }

  return "el elemento buscado no se encontro";
};

console.log(busqueda(lista, buscar))


console.log( lista.indexOf(21) )
