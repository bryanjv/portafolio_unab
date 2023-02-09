function savedata(){

    var rest = [];
    var nombre = document.querySelector('#input-nombre').value;
    var info = document.querySelector('#input-menu').value;

    if (window.localStorage.getItem('objrestaurant') != null){
        rest = JSON.parse(window.localStorage.getItem('objrestaurant'));
        console.log(rest);
        rest.push({nombre: nombre, menu: info}); 
        console.log(rest);
        window.localStorage.setItem('objrestaurant', JSON.stringify(rest));
    }else{
        window.localStorage.setItem('objrestaurant', JSON.stringify([{nombre: nombre, menu: info}]));
    }
    console.log(window.localStorage.getItem('objrestaurant'));
}