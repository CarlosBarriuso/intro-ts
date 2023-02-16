/*
    ===== Código de TypeScript =====
*/
// Decoradores de clases: Normalmente los decoradores sirven para cambiar las clases en el momento en el que 
//  son definidas. Es una función que expande su clase añadiendole funcionalidades especiales.
function classDecorator<T extends { new (...args: any[]):{} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}
@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {

        console.log( 'Hola Mundo' );
    }
}

console.log( MiSuperClase );

const miClse = new MiSuperClase();
console.log (miClse.miPropiedad);