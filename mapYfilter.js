
// complejidad computacional
// PARA COMPARAR UN ALGORITMO CON OTRO

// algoritmo O(n) 
// algoritmo O(n2)

let arreglo = [ 5, 15, 21, 5] 

// for (let i = 0; i < arreglo.length; i++) { // O(n) 4
  
//     console.log("hola")
    
// }

// for (let j = 0; j < arreglo.length; j++) { // O(n2) O(n x n) 16
    
//     for (let k = 0; k < arreglo.length; k++) {
        
//         console.log("hola")
        
//     }
    
// }


// METODOS MAP Y FILTER SON DE ARRAY

// MAP RETORNA UN NUEVO ARREGLO SIN MUTAR EL ORIGINAL

let array = [ 2, 5, 9]

// CREAR UN ARREGLO NUEVO CON LOS ELEMENTOS DEL ARRAY ORIGINAL INCREMENTADOS EN 1 
// CALLBACK ES UNA FUNCION QUE SE PASA COMO PARAMETRO A OTRA FUNCION

let arregloModificado = array.map( ( elemento, indice )=>  elemento + indice  )

console.log(arregloModificado)

console.log(array)

let arregloFiltrado = array.filter( (elemento)=>{
    return elemento > 3
})


console.log(arregloFiltrado)


let personas = [
    {
        id: 1,
        nombre: "vane",
      
    },
    {
        id: 2,
        nombre: "jere",
        
    }
]


// NO CREA ARREGLO NUEVO; LO QUE HACE ES DEVOLVER EL ELEMENTO COMO ES 
let personaEncontrada = personas.find( (elemento)=>{

    return elemento.id == 2

})

console.log(personaEncontrada)


let arrNuevo = ( arr )=>{

    let nuevoArr = []

    for (let i = 0; i < arr.length; i++) {
      
        nuevoArr.push(arr[i] + 1)
        
    }

    return nuevoArr

}





