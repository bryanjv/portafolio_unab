class Cliente{
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
        this.direccion = '';
        this.nacimiento = ''; //tiene que ser "YYYY/MM/DD"
    }

    get nombre(){
        return this._nombre;
    }

    get correo(){
        return this._correo;
    }

    get direccion(){
        return this._direccion;
    }

    set nombre(nuevoNombre) {
        nuevoNombre = nuevoNombre.trim();
        if (nuevoNombre==''){
            throw 'El nombre no puede estar en blanco.'
        }
        
        this._nombre = nuevoNombre;
    }
    
    set correo(nuevoCorreo) {
        nuevoCorreo = nuevoCorreo.trim();
        if (nuevoCorreo==''){
            throw 'El correo no puede estar en blanco.'
        }
        
        this._correo = nuevoCorreo;
    }

    set direccion(nuevaDireccion) {
        nuevaDireccion = nuevaDireccion.trim();
        if (nuevaDireccion==''){
            throw 'La direccion no puede estar en blanco.'
        }
        
        this._direccion = nuevaDireccion;
    }

    obtenerEdad(){
        var hoy = new Date();
        var cumpleanos = new Date(this.nacimiento);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }

        return edad;
    }
}