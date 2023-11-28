document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

const expresiones = {
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
	password: false,
	correo: false
}

function iniciarSesion(){
    var sCorreo='';
    var sContrasenna='';
    var bAcceso=false;


    sCorreo=document.querySelector('#txtCorreo').value;
    sContrasenna=document.querySelector('#txtContrasenna').value;

   bAcceso=validarCredenciales(sCorreo,sContrasenna);

   if(bAcceso==true){
       ingreasar();
   }
}
function ingreasar(){
    var rol=sessionStorage.getItem('rolUsuarioActivo');
    switch (rol) {
        case '1':
            window.location.href='pagina.html';
            
            break;
            case '2':
                window.location.href='pagina.html';
                break;
        default:
            window.location.href='index.html';
            break;
    }
}