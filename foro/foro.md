# Asincronía en JavaScript
Javascript fue diseñado para ser ejecutado en navegadores, trabajar con peticiones sobre la red y procesar las interacciones de usuario, al tiempo que se mantiene una interfaz fluida. Ser bloqueante o síncrono no ayudaría a conseguir estos objetivos, es por ello que Javascript ha evolucionado intencionadamente pensando en operaciones de tipo _I/O_. Por esta razón:

> **Javascript** utiliza un modelo **asíncrono y no bloqueante**, con un **_loop_ de eventos implementado con un único _thread_** para sus interfaces de entrada/salida.

Gracias a esta solución, Javascript es áltamente concurrente a pesar de emplear un único _thread_. Ya conocemos el significado de _asíncrono_ y _no bloqueante_.

```
console.log("Yo");

// Veremos esto en 2 segundos

setTimeout(()=>{
  console.log("como");
},2000)

console.log("Helado")
```
En el desarrollo de sitios o aplicativos web es muy común realizar consultas a **_A_**_pplication_ **_P_**_rogramming_ **_I_**_nterface(_**_API_**_)_ estas pueden ser propias o de terceros, lo cual al final del día se puede traducir como una petición al servidor, dicha petición se realiza utilizando funciones de _JavaScript_ de las cuales algunas presentan **asincronía.**

De una manera más concreta, las funciones que realizan operaciones de **entrada**/**salida** como pueden ser peticiones a servidores, lectura y escritura de archivos del disco.

# CallBacks _"I will call back later!"_

Cuando pasamos una función a otra función como un argumento, esto lo llamamos callback.  
Aquí podemos ver un ejemplo de una función callback:

## ¿Por qué usamos funciones callback?

Cuando hacemos una tarea compleja, dividimos esa tarea en pasos más pequeños. Para ayudarnos a establecer una relación entre estos pasos según el tiempo (opcional) y el orden, utilizamos devoluciones de llamada.

```javascript
function  mostrarResultado(some) {

console.log('El resultado es: ' + some);

}

function  myCalculator(num1, num2, myCallback) {

let  sum = num1 + num2;

myCallback(sum);

}

myCalculator(5, 5, mostrarResultado);

```

# Promesas

Esta es una de las nuevas técnicas que la comunidad está adoptando para solucionar el problema de _asincronía_ que presenta _JavaScript,_ dicha técnica consiste en la creación de un objeto **_Promise_** que recibe 2 parámetros los cuales son.

**_resolve_** : Este contendrá el resultado de la función que se está ejecutando dentro de la promesa.

**_reject :_** Contendrá una respuesta de error siempre y cuando no se pueda resolver la promesa.

Una promesa es un objeto al que le **adjuntamos _callbacks_, en lugar de pasarlos directamente a la función asíncrona**. La forma en que registramos esos dos _callbacks_ es mediante el método _.then(resolveCallback, rejectCallback)_. En terminología de promesas, decimos que una promesa se resuelve con éxito (_resolved_) o se rechaza con fallo (_rejected_). Echa un vistazo al siguiente ejemplo:

```javascript
const  imprimirEn1Seg = (valor) => {

return  new  Promise(resolve  => {

setTimeout(() => {

console.log(valor);

resolve();

}, 1000)

});

};

  
imprimirEn1Seg(1)

.then(() =>  imprimirEn1Seg(2))

.then(() =>  imprimirEn1Seg(3));

```

## Async / Await

Se supone que esta es la mejor manera de escribir promesas y nos ayuda a mantener nuestro código simple y limpio.

La etiqueta _async_ declara una función como asíncrona e indica que una promesa será automáticamente devuelta. Podemos declarar como _async_ tanto funciones con nombre, anónimas, o funciones flecha. Por otro lado, _await_ debe ser usado siempre dentro de una función declarada como _async_ y esperará automáticamente (de forma asíncrona y no bloqueante) a que una promesa se resuelva.

```javascript
function  resolveAfter2Seconds() {

return  new  Promise(resolve  => {

setTimeout(() => {

resolve('resolved');

}, 2000);

});

}

 
async  function  asyncCall() {

console.log('calling');

const  result = await  resolveAfter2Seconds();

console.log(result);

// expected output: "resolved"

}
 

asyncCall();

```
Cuando se llama a una función `async`, esta devuelve un elemento `Promise`. Cuando la función `async` devuelve un valor, `Promise` se resolverá con el valor devuelto. Si la función `async` genera una excepción o algún valor, `Promise` se rechazará con el valor generado.

Una función `async` puede contener una expresión `await`, la cual pausa la ejecución de la función asíncrona y espera la resolución de la `Promise` pasada y, a continuación, reanuda la ejecución de la función `async` y devuelve el valor resuelto.
