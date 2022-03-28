let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!
  const banco = {
    clientes: arrayCuentas,
    consultarCliente: function (nombre) {
      let mensajeError =
        "No se encontro ninguna coincidencia, por favor verifique los datos ingresados.";
      let clienteEncontrado;
      for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].titularCuenta === nombre) {
          clienteEncontrado = this.clientes[i];
        }
      }
      //antes de retornar pregunto si clienteEncontrado existe, es decir si contiene un objeto, si lo contiene va a ser true ya que existe algo, y lo envio, si no existe, es decir no contiene un objeto estara undefined lo cual resultara en false, en ese caso envio el mensaje de error
      return clienteEncontrado ? clienteEncontrado : mensajeError;
    },
  
    deposito: function (nombre, cantDeposito) {
      // Reutilizamos el metodo de consultar cliente para no repetirnos, y lo guardamos en una variable auxiliar
      let clienteEncontrado = this.consultarCliente(nombre);
      //generamos una variable aux de mensaje para el retorno final
      let mensaje;
      // consultamos si el resultado de encontrar a un cliente fue un objeto con la cuenta o si fue un mensaje, lo que significaria que no se encontro ningun cliente con ese nombre
      if (typeof clienteEncontrado !== "string") {
        //si el cliente fue localizado realizamos la suma al saldo actual y la guardamos (es lo mismo realizar clienteEncontrado.saldoEnPesos = clienteEncontrado.saldoEnPesos + cantDeposito) y guardamos el mensaje de deposito realizado en la variable mensaje
        clienteEncontrado.saldoEnPesos += cantDeposito;
        mensaje =
          "Deposito realizado correctamente. su nuevo saldo es: " +
          clienteEncontrado.saldoEnPesos;
      } else {
        mensaje =
          "No se encontro ninguna coincidencia, por favor verifique los datos ingresados.";
      }
      return mensaje;
    },
    extraccion: function (nombre, cantExtraccion) {
      // el metodo extraccion es similar a deposito con la diferencia que luego de verificar el clienteEncontrado corresponde a un cliente y no al mensaje de error verificamos que la resta entre el saldo actual y lo que se desea extraer no sea menor a 0, por lo tanto si la resta es mayor o igual a 0 realizamos la extraccion, caso contrario el mensaje sera fondos insuficientes
      let clienteEncontrado = this.consultarCliente(nombre);
      let mensaje;
      if (typeof clienteEncontrado !== "string") {
        if (clienteEncontrado.saldoEnPesos - cantExtraccion >= 0) {
          clienteEncontrado.saldoEnPesos -= cantExtraccion;
          mensaje =
            "extraccion realizado correctamente. su nuevo saldo es: " +
            clienteEncontrado.saldoEnPesos;
        } else {
          mensaje = "Fondos insuficientes";
        }
      } else {
        mensaje =
          "No se encontro ninguna coincidencia, por favor verifique los datos ingresados.";
      }
      return mensaje;
    },
  };
  // console.log("------- Metodo ConsultarCliente -------");
  // console.log(banco.consultarCliente("Jarret Lafuente"));
  // console.log(banco.consultarCliente("Abigael"));
  // console.log("------- Metodo Deposito -------");
  // console.log(banco.deposito("Abigael Natte", 1000));
  // console.log(banco.deposito("Abigael", 1000));
  // console.log("------- Metodo Extraccion -------");
  // console.log(banco.extraccion("Abigael Natte", 1000));
  // console.log(banco.extraccion("Abigael Natte", 30000));
  // console.log(banco.extraccion("Abigael ", 30000));
  
  /////////////// EXTRA BONUS /////////////////
  // Crear una función llamada propiedadUnica, que reciba un arreglo de objetos como parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string.
  // Ejemplo:
  // propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
  // propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]
  
  let array = [
    { nombre: "Lean", edad: 27 },
    { nombre: "Eze", edad: 49 },
  ];
  function propiedadUnica(arr, str) {
    let res = [];
  
    for (let i = 0; i < arr.length; i++) {
      let obj = {
        [str]: arr[i][str],
      };
      res.push(obj);
    }
    return res;
  }
  let objetoCambiado = propiedadUnica(array, "edad");
  console.log(objetoCambiado);
  
  ////////////////////////////////////////
  // Crear el objeto “alumno”, el cual va a consistir en las siguientes propiedades básicas:
  // Nombre
  // Número de legajo
  // Lista de notas
  // Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses todos los métodos y propiedades que puedan hacer falta para que el programa funcione correctamente de la manera solicitada.
  
  const alumno = {
    nombre: "Leandro",
    legajo: 123456,
    listadoNotas: [7, 2, 3, 5, 10],
    promedio: function () {
      let suma = 0;
      for (let i = 0; i < this.listadoNotas.length; i++) {
        suma += this.listadoNotas[i];
      }
      return suma / this.listadoNotas.length;
    },
    estaAprobado: function (notaMinima) {
      let promedio = this.promedio();
      return `El alumno ${this.nombre} esta ${
        promedio > notaMinima ? "aprobado" : "desaprobado"
      }. Su nota promedio es: ${promedio}`;
    },
  };
  
  let alumnoAprobado = alumno.estaAprobado();
  console.log(alumnoAprobado);
  
  
  
  