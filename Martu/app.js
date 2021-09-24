/*console.log ("Hola Mundo")

var nombre= "Martina";

var n = 25;
if ( 20 < n ) { 
    console.log (true);
} else {console.log (false) }

function saludo() {
    console.log ("Hola");
}
 saludo ();

 function miNombre (nombre) {
     console.log("Hola mi nombre es " + nombre);
 }

 miNombre("Martina");
 miNombre("Rocio");

 function apellido2 (apellido){
     console.log (`mi apellido es ${apellido}`);
 }

 var apellido1 = "Ortiz";

 apellido2 (apellido1); 


 function primeraFuncion () {
console.log ("uno");
console.log ("dos");
console.log ("tres");
 }

 primeraFuncion();

function segundaFuncion () {
    return 20;
}
console.log (segundaFuncion ());

function hola (nombre, edad){
 console.log ("Hola me llamo " + nombre);
 console.log ("tengo " + edad + " anios");
}

hola ('Martina', '26');


let funcionExcpresada = function () {
    console.log ("Esta es una funcion expresada");
}

funcionExcpresada();




numeros = [10,20,30,40,50,60,70,80,90];

for (let i= 0; i < numeros.length ; i++){
    console.log (numeros[i]);
}


function restarDosNumeros (a , b) {
 let diferencia = (a - b );
console.log(diferencia);
}

restarDosNumeros(5,2);



function puedeManejar (edad){
    if (edad >=18 ) {
        console.log("Puede manejar");
    } else if (edad <18 || edad ===0){
        console.log  ("sos un pendejo");
    } 
}
puedeManejar (-1)

function puedeManejar (edad){
    if (edad >=18 ) {
        return true;
    } else false;

}
let resultado =puedeManejar (22);
console.log(resultado);



for (i = 1; i <= 10; i++){
    resultado = i * 2;
    console.log ("2 " + "x " + i + " = " + resultado);
}



var numero = 10;
var i = 0;
do {
  numero = numero + 5;
  i++;
} while (i<8)
console.log (numero);



var arreglo = ["martu", 12, null, undefined,[1,2,3], true];


console.log(arreglo [5]);

var numeros = [5,7,9];
var incrementados = [];

function incrementarPorUno(numeros){

for (i = 0; i < numeros.length; i++){ 
    incrementados.push(numeros [i] + 1)
  
 } 

 console.log(incrementados);
}


var frutas = ["manzana", "banana", "pera", "kiwi"];

frutas.forEach (function(elemento, indice, arreglo){
console.log(elemento, indice, arreglo);
})

var nombreApellido = ["martina" , "ortiz"];
console.log(nombreApellido.join(" "));


if(arguments.length===0) return 0;
if (arguments.length===1) return arguments[0];

  var multiplicacion = 1;

  for(var i = 0 ; i < arguments.length; i++){
    multiplicacion = multiplicacion * arguments[i];
  }
return multiplicacion;

if (nuevoAarray.length=== 3){



 function funcionDevuelveValor(){
return "hola que tal como te va";

 }

 console.log (funcionDevuelveValor())

/* let contador = 0;
 while (contador < 10){
     console.log(contador);
     contador ++;
 }
 
 let contador = 0;

do { console.log(contador);
    contador ++;

} while (contador < 10);


const mar = {
    nombre : "Martina",
    apellido : "Ortiz Novero",
    edad : 26,
}

for(const propiedad in mar) {
    console.log (`${propiedad} : ${mar[propiedad]}`);
}


function Persona (firstname, lastname){
this.firstname = firstname;
this.lastname = lastname;
}

var juan = new Persona ("Juan", "Perez");
console.log(juan);  



function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"
  }
  
  // ---------------------------------------------------------------------------//
    //Crea el constructor de la clase "Persona"
    //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
    //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona
    //y sus valores.
    //Ej: { 
      //   Nombre: 'Juan',
      //   Apellido: 'Perez',
      //   Edad: 22,
      //   Domicilio: 'Saavedra 123'
      //  }
  
    class Persona {
      constructor(nombre, apellido, edad, domicilio) {
        this.nombre = nombre;
        this.apellido= apellido;
        this.edad= edad;
        this.domicilio=domicilio;
      }
      detalle(){
          return propiedades;
      }
  }

  var propiedades = new Persona ('Juan', 'Perez', 22, 'Saavedra 123');
  

function matriz(f, c) {
    
    for (i = 0; i < f; i++) {
        for (j = 0; j < c; j++) {
            console.log(i + "," + j);
        }
    }
}

matriz(4, 4);

*/




//////////////////////////////////////////EJERCICIOS QUE NO ME SALIERON////////////////////////////////////////
/*
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  // LES PISA EL VALOR DE MAXIMO
  var maximo = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (maximo < numeros[i]) {
      maximo = numeros[i];
    }
  }
  return maximo;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1) return 0;
  var total = 1;
  for (var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}

// NUMERO PRIMO CON EL BUCLE FOR//
if (numero < 2) return false;
if (numero === 2) return true;
for (var i = 2; i < numero; i++) {
  if (numero % i === 0) {
    return false;
  }
}
return true;

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var acumulador = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      acumulador++;
    }
  } return acumulador;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === arreglo[i + 1]) {
      return true;
    }
  } return false;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoAarray = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoAarray.push(array[i])
    }
  } if (nuevoAarray.length === 3) {
    return nuevoAarray;
  } else {
    return "No se encontraron los meses pedidos"
  }
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse 
  //la ejecución SIGNIFICA QUE TENGO QUE PONER EL BREAK y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma = suma + 2;
    if (suma === i) break;
    else {
      array.push(suma);
    }
  }
  if (i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
    return array;
  }
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario.email === null || usuario.email === undefined) {
    return false
  } else {
    return true;
  }
}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]) {
    return true;
  } else {
    return false;
  }
}


function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var suma = 0;
  for (i = 0; i < usuario.posts.length; i++) {
    let like = usuario.posts[i].likes;
    suma = suma + like;
  }
  return suma;
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if (usuario.password === password) {
    return true
  } else {
    return false;
  }
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]")
  // y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto.calcularPrecioDescuento = function () {
    return producto.precio - (producto.precio * producto.porcentajeDeDescuento)
  }
  return producto;

}


function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 
  //'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }

  Usuario.prototype.saludar = function () {
    return 'Hola, mi nombre es ' + this.nombre;
  };
}
return Usuario;

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function (){
    return this.split('').reverse().join('');
  }


}
 // CALLBACKS


function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb` QUE SIGNIFICA????? que lo invoque dentro de la funcion ?
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce (function (acc, elem){
    return acc + elem;
  }) 
  cb (suma);
  
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
 array.forEach(function(elemento){
   return cb (elemento);
 })
  
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` 
  //en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = array.map(function(x){
    return cb (x)
  })
  return nuevoArray;
} 

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  /* var otroArray = array.filter (function(elemento){
    return elemento[0] === "a";
  }) 
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

















