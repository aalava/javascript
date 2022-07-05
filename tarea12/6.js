productos = [
	{"name":"Aceite","price":100,"stock":5},
	{"name":"Carne","price":300,"stock":50},
    {"name":"Huevos", "price":25,"stock":1000}
];

for (let i = 0; i < productos.length; i++) {
    productos[i].iva = parseInt(productos[i].price * 12/100);
}

console.log(productos);