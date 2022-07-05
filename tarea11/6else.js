const tipoDeMatricula = 'Basic';

if (tipoDeMatricula == 'Free'){
    console.log('Solo puedes tomar los cursos gratis');
}
else {
    if (tipoDeMatricula == 'Basic'){
    console.log('Puedes tomar casi todos los cursos del ITI durante un mes');
    }
    else {
        if (tipoDeMatricula == 'Expert'){
            console.log('Puedes tomar casi todos los cursos del ITI durante un año');
        }
        else {
            if (tipoDeMatricula == 'Expert Plus'){
                console.log('Tú y alguien más pueden tomar TODOS los cursos del ITI durante un año');
            }
        }
    }
}