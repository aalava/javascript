const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhttp = new XMLHttpRequest();
const API = `https://rickandmortyapi.com/api`;

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

fetchData(`${API}/character`)
.then(res => {
    console.log(res.info.count);
    fetchData(`${API}/character/${res.results[0].id}`)
    .then(res => {
        console.log(res.name);
        fetchData(`${API}/location/${res.id}`)
        .then(res => {
            console.log(res.dimension)
        })
    })
})
