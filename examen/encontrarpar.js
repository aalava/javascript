function encontrarPar(dato){
    let j = 0;
    
    for (let i = 0; i < dato.length; i++){
        if (dato[i]%2==0){
            j++;
        }
    }

    if (j>0){   
    console.log(true);
    }
    else {
        console.log(false);
    }
}

encontrarPar([1,3,5,7,10,11]);
encontrarPar([1,3,5]);