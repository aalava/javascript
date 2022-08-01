/*
¿El año es bisiesto?
*/

var dato;

dato = parseInt(prompt('Ingrese el año:'));

if (dato % 400 == 0){
    console.log('El año ingresado es bisiesto');
}
else {
    if (dato % 100 == 0){
        console.log('El año ingresado no es bisiesto');
    }
    else {
        if (dato % 4 == 0){
            console.log('El año ingresado es bisiesto');
        }
        else {
            console.log('El año ingresado no es bisiesto');
        }
    }    
}