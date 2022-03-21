function saludar(nombre) {
  alert("Hola " + nombre);
}

function ingresarUsuario(callback) {
  var nombre = prompt("Ingresa tu nombre");
  callback(nombre);
}

ingresarUsuario(saludar);
