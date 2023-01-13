function validar(){
    var username = document.getElementById('correo').value;
    var password = document.getElementById('pass').value;

    if (username == "admin" && password == "1234" ){
        window.location.href = 'restaurant.html';
        // console.log(window.location);
        // window.open("restaurant.html", "_self", true);
        // console.log(window.location);
    }else{
        alert("Pone bien las credenciales >:C");
        console.log('holi');
        return false;
    }
}
