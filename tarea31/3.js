/*
Cálculo de Descuentos
*/

var items, compraTotal, descuento, pagoTotal;

items = parseInt(prompt('Cantidad de items vendidos?:'));
compraTotal = parseInt(prompt('Valor Total de la venta'));

if (items < 5){
    descuento = parseFloat('0.10');
    pagoTotal = parseFloat(compraTotal - (descuento * compraTotal));
    console.log('Se ha aplicado un descuento del 10% que corresponde a: $' + (descuento * compraTotal) + '. El pago a realizar es de: $' + pagoTotal);
}

if (items >= 5 && items < 10){
    descuento = parseFloat('0.20');
    pagoTotal = parseFloat(compraTotal - (descuento * compraTotal));
    console.log('Se ha aplicado un descuento del 20% que corresponde a: $' + (descuento * compraTotal) + '. El pago a realizar es de: $' + pagoTotal);
}

if (items >= 10){
    descuento = parseFloat('0.40');
    pagoTotal = parseFloat(compraTotal - (descuento * compraTotal));
    console.log('Se ha aplicado un descuento del 40% que corresponde a: $' + (descuento * compraTotal) + '. El pago a realizar es de: $' + pagoTotal);
}
