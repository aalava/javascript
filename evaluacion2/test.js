/* XMLHTTREQUEST y PROMESAS */

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhttp = new XMLHttpRequest();
const API = `https://swapi.dev/api/`;

const fetchData = (urlAPi) => {
    return new Promise((resolved, reject) => {
        xhttp.open("GET", urlAPi, true);
        xhttp.onreadystatechange = (eve) => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolved(JSON.parse(xhttp.responseText));
                }else{
                    const error = new Error("Error "+urlAPi)
                    reject(error);
                }
            }
        }
        xhttp.send();
    })
}

fetchData(`${API}/people/1/`)
.then(res => {
    console.log('El nombre es: ' + res.name + ', y su estatura es: ' + res.height);
    fetchData(`${API}/planets/3`)
    .then(res => {
        console.log('El nombre del 3er Planeta es: ' + res.name + ', y su diametro es: ' + res.diameter);
        fetchData(`${API}/starships/2`)
        .then(res => {
            console.log('La 2da nave estelar es: ' + res.name + ', y su clase es: ' + res.starship_class);
        })
    })
})