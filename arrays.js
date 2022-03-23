/* 
A partir de un array de correos, recorrerlo para corroborar si son válidos. 
Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y 
agregar aquellos que lo tengan al array de correos admitidos.
 En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
Desarrollar una función que realice la verificación de cada elemento del array 
de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, 
agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
Mostrar por pantalla la cantidad y los elementos de cada array.
*/

// LISTA DE CORREOS PENDIENTES

let arrayCorreosPendientes = [
  "iroman@digitalhouse.com",
  "loki%digitalhouse.com",
  "loki@digitalhouse.com",
  "thanosdigitalhouse.com",
  "thanos@digitalhouse.com",
];

// array de correos admitidos
let arrayCorreosAdmitidos = [
  "thor@digitalhouse.com",
  "tucuMan@digitalhouse.com",
  "wanda@digitalhouse.com",
];

// array de correos descartados

let arrayCorreosDescartados = [
   
];

console.log("pendientes", arrayCorreosPendientes)
console.log("admitidos", arrayCorreosAdmitidos)
console.log("descartados", arrayCorreosDescartados)


let verificarCorreo = ( email )=>{

    if( email.includes("@") ){

        arrayCorreosAdmitidos.push( email )
        

    }else{

        arrayCorreosDescartados.push( email )

    }

}

for( let i = 0 ; i < arrayCorreosPendientes.length ; i++){

    verificarCorreo( arrayCorreosPendientes[i])

}




// FUNCION QUE LE PASE EL ARREGLO DE PENDIENTES Y ME PUSHEE AUNO U OTRO LADO 
// ESTA ES LA OTRA FUNCION QUE HICIMOS PARA AGRUPAR TODO DENTRO DE ELLA 

// let verificarCorreo2 = function( agrupacion ){

//     for(let i = 0 ; i < agrupacion.length ; i++){

//         if( agrupacion[i].includes("@") ){

//             arrayCorreosAdmitidos.push(agrupacion[i])

//         }else{

//             arrayCorreosDescartados.push(agrupacion[i])

//         }
//     }

// }

// verificarCorreo2(arrayCorreosPendientes)

console.log("-----------------------")
arrayCorreosPendientes = []

console.log("pendientes", arrayCorreosPendientes)
console.log("admitidos", arrayCorreosAdmitidos)
console.log("descartados", arrayCorreosDescartados)

