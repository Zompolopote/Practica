database = [];

// Iniciar
if(localStorage.getItem('database')){
    database = JSON.parse(localStorage.getItem('database'));
}else{
    database = [];
}

// Actualizar el localStorage
function update(){
    localStorage.setItem('database', JSON.stringify(database));
}

function add(nombreArg, emailArg, passArg){
    const persona = {
        nombre: nombreArg,
        email: emailArg,
        pass: passArg
    }
    database.push(persona);
    update();
}




