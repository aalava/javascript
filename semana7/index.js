const urlAPI = 'https://api.thecatapi.com/v1/images/search?limit=3';

const urlAPI2 = 'https://api.thecatapi.com/v1/images/search?limit=3';

const getCatsRandom = async () => {
    const response = await fetch(urlAPI);
    const data = await response.json();

    const array = [];



    data.forEach(cat => {
        const img = document.createElement('img');
        img.src = cat.url;
        img.width = 180;
        img.height = 200;

        array.push(img);

        //creando buttom
        const buttom = document.createElement('button');
        buttom.innerHTML = "Agregar a Favoritos";

        array.push(buttom);

    });
    

    /*
    const array = [];

    document.body.append(...array);
    */
        
    /*
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const img3 = document.querySelector('#img3');

    console.log(data);

    img1.src = data[0].url;
    img1.width = 180;
    img1.height = 200;

    img2.src = data[1].url;
    img2.width = 180;
    img2.height = 200;

    img3.src = data[2].url;
    img3.width = 180;
    img3.height = 200;

    */

} 

//getCatsRandom();


