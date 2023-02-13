class Restaurant {
    constructor(nombre, rut){

        this.nombre = nombre;
        this.rut = rut;
        this.carta = [];
        this.valoracion = {rate:0, opiniones:[]}
        this.direccion = "";
    }

    get nombre(){
        return this._nombre;
    }

    get rut(){
        return this._rut;
    }

    get carta(){
        return this._carta;
    }

    get valoracion(){
        return this._valoracion;
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

    set carta(nuevaCarta){
        this._carta = nuevaCarta;
    }

    set direccion(nuevaDireccion){
        this._direccion = nuevaDireccion;
    }

    AgregarAcarta(agregarAlMenu){
        this.carta.push(agregarAlMenu);
    }

    AgregarValoracion(valor, opinion){
        if(this.valoracion.rate == 0){
            this.valoracion.rate = valor;
            this.valoracion.opiniones.push(opinion);
        }else{
            this.valor.opiniones.push(opinion);
            this.valoracion.rate = (this.valoracion.rate + valor)/this.valoracion.opiniones.length;
        }
    }
}