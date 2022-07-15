let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
 
 let order = (call_production) =>{

  console.log("Orden confirmdada. Llamar a producción")
  
  // function 👇 is being called 
    call_production();
  };
  
  let production = () =>{
  
  console.log("Producción ha empezado")
  
  };
  order(production);


  function mostrarResultado(some) {
    console.log('El resultado es: ' + some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, mostrarResultado);




  const imprimirEn1Seg = (valor) => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(valor);
        resolve();
      }, 1000)
    });
  };

  imprimirEn1Seg(1)
.then(() => imprimirEn1Seg(2))
.then(() => imprimirEn1Seg(3));



function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();