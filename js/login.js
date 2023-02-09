function validar(){
    var username = document.getElementById('correo').value;
    var password = document.getElementById('pass').value;

    if (username == "admin" && password == "1234" ){
        window.location.href = 'restaurant.html';

    }else{
        alert("Pone bien las credenciales >:C");
        return false;
    }
}
