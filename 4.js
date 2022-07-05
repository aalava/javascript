var name;
var lastname;
var nickname;

function llamada(name, lastname, nickname){
    this.name = name;
    this.lastname = lastname;
    this.nickname = nickname;

    console.log(`Mi nombre completo es ${name} ${lastname}, pero prefiero que me digas ${nickname}`);
}

llamada('Juan David', 'Castro Gallego', 'juandc');

