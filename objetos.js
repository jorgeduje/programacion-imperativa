

let calcular = function(){

    let acumulador = 0
    for(let i = 0 ; i < this.notas.length ; i++){
        acumulador = acumulador + this.notas[i]
    }
    return acumulador / this.notas.length
}

let decirEstado = function(){
    
    let promedio = this.promedio()
    return promedio >= 7 ? "aprobado":"desaprobado"
   
}


// SISTEMA DE ALUMNOS

let alumnos = [
    {
        nombre: "pepito",
        apellido: "perez",
        numLegajo: 123456,
        notas: [6, 8, 9, 5],
        promedio: calcular,
        estado : decirEstado
    },
    {
        nombre: "juancito",
        apellido: "lopez",
        numLegajo: 123457,
        notas: [4, 5, 9, 6],
        promedio: calcular,
        estado :decirEstado
    },
    {
        nombre: "maria",
        apellido: "gonzales",
        numLegajo: 123458,
        notas: [6, 8, 3, 1],
        promedio: calcular,
        estado : decirEstado
    }
]


for(let i = 0 ; i < alumnos.length ; i++){
    console.log( `el promedio de ${alumnos[i].nombre} ${alumnos[i].apellido} es ${alumnos[i].promedio()}` )
    console.log(`el alumno ${alumnos[i].nombre} esta ${alumnos[i].estado()}`)
}

