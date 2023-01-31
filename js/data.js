function savedata(data){

    if (typeof window.localStorage.getItem(objrestaurant)){

    }else{
        var objrestaurant = {};
        window.localStorage.setItem(objrestaurant,)
    }
}


const objrestaurant = {
    Chimichurri: window.localStorage.getItem("Chimichurri"),
    Mcdolan: window.localStorage.getItem("Mcdolan"),
    Vegetalking: window.localStorage.getItem("Vegetalking") 
};

function savedata(data){
    window.localStorage.setItem(data.nombre, data.datos);
}

function getdata(data.nombre)