const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();
    //Abre la conexion de la API
    xhttp.open('GET', urlApi, true);
    // Verifica el estado de la conexion
    xhttp.onreadystatechange = function (even) {
        if (xhttp.readyState === 4) {
            //validar las respuesta del servidor
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error '+ urlApi);
                callback(error, null)
            }
        }
    }
    xhttp.send()
}

fetchData(`${API}/character`, function(error1,data1){
    if (error1) return console.error(error1);
    console.log(data1.info.count);

    fetchData(`${API}/character/${data1.results[0].id}`, function(error2, data2){
        if (error2) return console.error(error2);
        console.log(data2.name);
        
        fetchData(`${API}/location/${data2.id}`, function(error3, data3){
            if (error3) return console.error(error3);
            console.log(data3.dimension);
        })
    })
})