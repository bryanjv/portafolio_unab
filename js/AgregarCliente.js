function AgregarCliente(formulario) {

    const fs = require('fs');
  // Storing the JSON format data in myObject
    var data = fs.readFileSync("../dataCliente.json");
    var myObject = JSON.parse(data);

    // Defining new data to be added

    let nombre = formulario.nombreCliente.value;
    let correo = formulario.correoCliente.value;
    let direccion = formulario.direccionCliente.value;
    let nacimiento = formulario.nacimientoCliente.value;


    let newData = {nombre, correo, direccion, nacimiento};

    // Adding the new data to our object
    myObject.push(newData);

    // Writing to our JSON file
    var newData2 = JSON.stringify(myObject);
    fs.writeFile("../dataCliente.json", newData2, (err) => {
      // Error checking
        if (err) throw err;
            console.log("New data added");
    });
}
