//elementos
const nombre = $("#name");
const pass = $("#pass");
const pass_login = $("#pass_login");
const email = $("#email");
const email_login = $("#email_login");
const registro = $("#registro");
const alert_error = $("#alert_error");
const alert_error_login = $("#alert_error_login");
const login = $("#login");

login.on('click', function(){

    const emailValidateLogin = email_login.val();
    const passValidateLogin = pass_login.val();

    var error = ""
    
    if(!validateEmail(emailValidateLogin)){
        error += '<p>Ingrese un mail valido</p>'
    }
    if(passValidateLogin.length<6){
        error += '<p>La contraseña debe tener al menos 6 caracteres</p>'
    }
    console.log(error);

    if(error!=""){
        alert_error_login.html(error)
        alert_error_login.show()
    }else{
        alert_error_login.hide()
    }     
    }
)


registro.on('click', function(){
   
    const nombreValidate = nombre.val();
    const passValidate = pass.val();
    const emailValidate = email.val();

    var error = ""

    if(nombreValidate==""){
        error += '<p>No podes dejar el nombre vacio</p>'
    }
    if(passValidate.length<6){
        error += '<p>La contraseña debe tener al menos 6 caracteres</p>'
    }
    if(!validateEmail(emailValidate)){
        error += '<p>Ingrese un mail valido</p>'
    }
    console.log(error);

    if(error!=""){
        alert_error.html(error)
        alert_error.show()
    }else{
        alert_error.hide()
    }
})


//Funciones

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

