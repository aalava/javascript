/*
Pedir 3 números  y mostrarlos de mayor a menor
*/

var num1, num2, num3, mayor, medio, menor;

num1 = parseInt(prompt('Ingrese 1er número'));
num2 = parseInt(prompt('Ingrese 2do número'));
num3 = parseInt(prompt('Ingrese 3er número'));

function mostrarNumeros(){       
    if (num1 > num2){
		if (num1 > num3){
			mayor = num1;
			if (num2 > num3){
				medio = num2;
				menor = num3;
			}
			else {
				medio = num3;
				menor = num2;
			}
		}
		else {
			mayor = num3;
			medio = num1;
			menor = num2;
		}
	}
	else {
		if (num2 > num3){
			mayor = num2;
			if (num1 > num3){
				medio = num1;
				menor = num3;
			}
			else {
				medio = num3;
				menor = num1;
			}
		}
		else {
			mayor = num3;
			medio = num2;
			menor = num1;
		}
	}
		
	console.log("El número mayor es: ", mayor);
    console.log("El número medio es: ", medio);
    console.log("El número menor es: ", menor);

}

mostrarNumeros();