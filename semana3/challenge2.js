//Fetch
// npm i node-fetch
import fetch from 'node-fetch'
const API = 'https://rickandmortyapi.com/api';
const fetchData = (urlApi) => {
    return fetch(urlApi).then(res => res.json())
}
fetchData(`${API}/character`)
.then(data1 => {
    console.log(data1.info.count);
    return fetchData(`${API}/character/${data1.results[0].id}`)
})
.then(data2 => {
    console.log(data2.name);
    return fetchData(`${API}/location/${data2.id}`)
})
.then(data3 =>{
    console.log(data3.dimension);
})


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2fa419450mshb197e492060ab42p18f376jsnf3f1ad3d3351',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch('https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));