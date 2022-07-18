import fetch from 'node-fetch'
const API = 'https://rickandmortyapi.com/api';

async function showRickAndMortyData() {
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    //data1
    let response = await fetch(`${API}/character`);
    let data1 = await response.json();
    console.log(data1.info.count);
    
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    //data2
    let response2 = await fetch(`${API}/character/${data1.results[0].id}`);
    let data2 = await response2.json();
    console.log(data2.name);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    //data3
    let response3 = await fetch(`${API}/location/${data2.id}`);
    let data3 = await response3.json();
    console.log(data3.dimension);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  }
  
  showRickAndMortyData();
