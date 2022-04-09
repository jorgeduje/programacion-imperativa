// AL FIN VIERNES!!! 💪💪💪

// MATRIZ DE 4 X 7
let gastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100],
  [1750, 1890, 1900, 1300, 898, 1750, 2800],
  [1700, 1150, 1690, 1900, 1770, 4500, 2560],
  [800, 1250, 1430, 2100, 1980, 1270, 950],
];

// CALCULAR GASTO TOTAL DE LA TERCER SEMANA

let totalSemanaTres = 0
for (let i = 0; i < gastos[2].length; i++) {

    totalSemanaTres += gastos[2][i]

}
console.log(totalSemanaTres)

// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO EN LOS DIAS JUEVES ( JUEVES = POSICION 3)
// ¿COMO LO HARIAS?

let sumaJueves = 0
for( let i = 0 ; i < gastos.length ; i++){

    sumaJueves += gastos[i][3]

}
console.log( sumaJueves )

// CALCULAR EL TOTAL GASTADO DEL MES

let totalMensual = 0

// for(let semana = 0 ; semana < gastos.length ; semana++){

//     for(let dia = 0 ; dia < gastos[semana].length ; dia++ ){

//         totalMensual += gastos[semana][dia]
//     }
// }

for(let i = 0 ; i < gastos.length ; i++){

    for(let j = 0 ; j < gastos[i].length ; j++ ){

        totalMensual += gastos[i][j]
    }
}

console.log( totalMensual )



// CALCULAR EL GASTO TOTAL DE CADA SEMANA Y MOSTRARLO EN CONSOLA
// CREAR UN ARRAY CON EL TOTAL DE CADA SEMANA
// REPORTAR CUAL FUE LA SEMANA EN QUE MAS SE GASTO

let arrGastosSemana = [];
let gastoSemanal = 0;

for (let i = 0; i < gastos.length; i++) {
  for (let j = 0; j < gastos[i].length; j++) {
    gastoSemanal += gastos[i][j];
  }

  arrGastosSemana.push(gastoSemanal);
  gastoSemanal = 0;
}
console.log(arrGastosSemana);

let encontrarMayor = (num1, num2) => {
  // if(num1 > num2){
  //     return num1
  // }else{
  //    return num2
  // }

  return num1 > num2 ? num1 : num2;
};

let resultado = encontrarMayor(
  encontrarMayor(arrGastosSemana[0], arrGastosSemana[1]),
  encontrarMayor(arrGastosSemana[2], arrGastosSemana[3])
);
console.log(resultado);

let posicionSemana = arrGastosSemana.indexOf(resultado);

console.log(
  `La semana en que mas se gasto es la semana numero ${posicionSemana + 1} 
  que esta en la posicion ${posicionSemana}`
);
