const carrera = [
    {name: "redes", horas: 800, practicas: 140},
    {name: "Aplicaciones", horas: 900, practicas: 240},
    ]

    const newArray = [];

    for (let i=0; i < carrera.length; i++){
        newArray.push(carrera[i].name);
    }
   
    console.log(newArray);

    const newArray2 = carrera.map((i) => i.name);

    //filter find flat join concat

    console.log(1);

    setTimeout(()=>{
        console.log(2);
        console.log(3);
    }, 0)
    console.log(4);

