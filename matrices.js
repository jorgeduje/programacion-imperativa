// WELCOME TO MATRICES 😅😅😅

 // 2X3
 let arrMatriz = [
    [4, 2, 3], // FILAS
    [15, 7, 21], // FILAS
    
];

// console.log( arrMatriz[1][1] )

// ACA ESTOY RECORRIENDO UNA COLUMNA Y LO QUE VA CAMBIANDO ES LA FILA 
// SABER EL RESULTADO DE LA SUMA DE LA COLUMNA EN LA POSICION 2
let resCol = 0
for (let i = 0; i < arrMatriz.length; i++) {
   
   resCol += arrMatriz[i][2]
    
}
console.log( resCol )

// ACA ESTOY RECORRIENDO UNA FILA Y LO QUE VA CAMBIANDO ES LA COLUMNA
// SABER EL RESULTADO DE LA SUMA DE LA FILA EN LA POSICION 0


let resFil = 0

for( let i = 0 ; i < arrMatriz[0].length ; i++){

    resFil += arrMatriz[0][i]
}

console.log(resFil)


let matrix = [

    [2, 6, 7, 1, 3], // FILAAAAAAAAA
    [6, 1, 8, 12, 7], // FILAAAAAAAAA
    [7, 43, 12, 76, 12], // FILAAAAAAAAA
    [7, 12, 41, 13, 1], // FILAAAAAAAAA
    [5, 4, 32, 13, 3], // FILAAAAAAAAA
    
];


for (let fila = 0; fila < matrix.length; fila++) {
   
    for (let col = 0; col < matrix[fila].length; col++) {
       
        // console.log( matrix[fila][col])
        
    } 
}

let sumaImpares = 0
for (let fila = 0; fila < matrix.length; fila++) {

    for (let Col = 0; Col < matrix[fila].length; Col++) {
        
        if(matrix[fila][Col] % 2 !== 0){            
            sumaImpares += matrix[fila][Col]
        }        
    }    
}
console.log(sumaImpares);


let suma= 0
for(let fila= 0; fila<matrix.length; fila++){
    for(let col=0; col<matrix[fila].length; col++){
        suma += matrix[fila][col]

    }
}
console.log(suma);

// MESA CLASE 16 ULTIMO EJERCICIO







