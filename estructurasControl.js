const prompt = require("prompt-sync")({ sigint: true });



// ELSE IF

let probarFuncion = (numero) => {
  if (numero > 6) {
    return "estoy en el if";
  } else if (numero === 5) {
    return "estoy en el else if";
  } else {
    return "estoy en el else";
  }
};

console.log(probarFuncion(5));

// TERNARIO

let clima = "soleado";

let mamaSalgoConParaguas =
  clima === "lluvioso" ? "si llevalo" : "no, no hace falta";

console.log(mamaSalgoConParaguas);

// SWITCH

let obtenerAnimal = (mascota) => {
  switch (mascota) {
    case "gato":
      return "soy un gato";
    case "lobo":
      return "soy un lobo";
    case "perro":
      return "soy un perro";
    default:
      return "no conozco ese animal";
  }
};
console.log(obtenerAnimal("perro"));


/*

¿Puede subir?

 En un parque de diversiones nos piden un programa para verificar si los pasajeros de
 la montaña rusa pueden subir al juego.
 Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y 
 si viene acompañada. Debe retornar un valor booleano (TRUE, FALSE) que indique si
 la persona puede subirse o no, basado en las siguientes condiciones:
 Debe medir más o igual de 1,40m y menos de 2 metros.
 Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.
 Si mide menos de 1,20m, no podrá subir ni acompañado.
 Modificar la función para impedir la subida al juego si la persona fue penalizada 
 por no respetar las normas y reglas del juego.

*/


let puedeSubir = (altura, acompañada)=>{

    if(altura >= 1.4 && altura < 2){
        return "si puede pasar"
    }else if(altura < 1.4 && altura >= 1.2 && acompañada === true){
        return "si puede pasar pero acompañada"
    }else{
        return "lo siento, no puede pasar"
    }

}

console.log( puedeSubir(1.10, true) )
console.log( puedeSubir(1.30, true) )
console.log( puedeSubir(1.30, false) )
console.log( puedeSubir(1.80, true) )

