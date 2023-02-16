/*
    ===== Código de TypeScript =====
*/
//Clases básicas
// alcance
//  PRIVATE: Solo puede verse dentro de la clase
//  PUBLIC: Puede verse desde fuera de la clase
//  STATIC: Se puede acceder al valor de la propiedad sin crear una instancia de la clase

// La diferencia entre clase e interface, es que de la clase se usa para crear una instancia
//  en la interface no se implementa la funcionalidad solo se define los tipos

// El constructor solo se ejecuta cuando se crea una instacia de la clase. En él se inicializan las prpopiedades de la clase.
// Se pueden definir la prpopiedades de la clase directamente en el constructor, respetando el orden al crear una 
// instancia con (new) y  si queremos que sean opcionales hay que ponerles (?)

// EXTENDER  una clase es añadir ciertas funcionalidades, propiedades a una clase existente

class PersonaNormal{
    
    constructor(
        public nombre: string,
        public direccion: string
        ) {}
}
class Heroe extends PersonaNormal{
    /*public alterEgo: string;
    public edad: number;
    public nombreReal?: number;*/
    
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ) {
            super( nombreReal, 'New York, USA');
        this.alterEgo = alterEgo;
        console.log( 'Hey!! desde el constructor' );
    }
}

const ironman = new Heroe ( 'Iroman', 45, 'Tony');

console.log( ironman );