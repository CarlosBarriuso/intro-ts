/*
    ===== Código de TypeScript =====
*/
// Genericos: Para decir que puede ser de cualquier tipo el dato se usa <T>

function queTipoSoy<T> ( argumento: T) {
    
    return argumento;
}

let soyString = queTipoSoy ( 'Hola Mundo' );
let soyNumero = queTipoSoy ( 100 );
let SoyArray = queTipoSoy ( [1,2,3,4,5,6,7,8,9,10] );

let soyExplicito = queTipoSoy<number>( 100 );