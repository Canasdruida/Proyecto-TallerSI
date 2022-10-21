
// funcion para login 
function iniciarsesion(){

    const username = document.getElementById('emaillog').value;
    const password = document.getElementById('passlog').value;
    console.log(username,password);
    //aqui va la query de validar la bd
}
// si se clickea el boton de iniciar sesion se ejecuta la funcion 
document.getElementById("botonreg").onclick = function (){
       iniciarsesion();
}

//funcion para registrar 
function registrar(){

    const username = document.getElementById('emailreg').value;
    const password = document.getElementById('passreg').value;
    const passconfirm = document.getElementById('passreg2').value;
    console.log(username,password,passconfirm);
    //aqui va la query de registrarse

}
// si se clickea el boton de iniciar sesion se ejecuta la funcion 
document.getElementById("crearcuenta").onclick = function (){
       registrar();
}