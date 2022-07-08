const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);
}

