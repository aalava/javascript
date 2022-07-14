const pr = new Promise((resolve, reject) => {
    resolve("Hey todo perfecto");
    reject("Todo salio mal :(");
})

const cats = 10;

const countCat = new Promise((resolve, reject) => {
    if (cats <= 5){
        resolve("Aceptar");
    }
    else {
        reject("Rechazado");
    }
})

countCat
.then((res) => console.log(res))
.catch((err) => console.log(err))

/*
.then(function(res)){
    console.log(res);
}
*/