const fruits = ["banana", "manzana", "pera", "fresa"];

for (let i=0; i < fruits.length; i++){
    let el = fruits[i];
    console.log(`la fruta es `, el);
}

for (let fr in fruits) {
    console.log(`la fruta es `, fr);
}

let i = 0;

while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}

let total = 0;

while (total <= 50){
    let n = 0;
    n = Number(prompt("Ingrese un numero"));
    total = total + n;
}

console.log(total);

const alumnos = {
    name: "Cristian",
    edad: 30,
}

console.log(alumnos.edad);

var nombre;

var numero = 9.46789; 
var conDecimal = numero.toFixed(2); 
console.log(conDecimal);
// Igual a 9.47 
console.log(typeof conDecimal)

var numero = 9.46789; 
numero = parseFloat(numero);

console.log(numero);
console.log(typeof numero)


var nombre = 'Manuel Alejandro';
var apellido = 'Alava Ruiz';
console.log(nombre + ' ' + apellido);

var dineroAhorrado = 100.50;
var deudas = 50.25;
var dineroReal;
dineroReal = dineroAhorrado - deudas;
console.log(dineroReal);



var deudas;
deudas = 50.25;
console.log(deudas);
console.log(typeof deudas);


var name;
var lastname;
var nickname;

function llamada(name, lastname, nickname){
    this.name = name;
    this.lastname = lastname;
    this.nickname = nickname;

    console.log(`Mi nombre completo es ${name} ${lastname}, pero prefiero que me digas ${nickname}`);
}

llamada('Juan David', 'Castro Gallego', 'juandc');