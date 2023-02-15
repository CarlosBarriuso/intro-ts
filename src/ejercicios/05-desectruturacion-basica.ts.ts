/*
    ===== Código de TypeScript =====
*/
//Desestructuración 

// de Objetos
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

//desestructuración del objeto
const { volumen, segundo, cancion, detalles} = reproductor;
const { autor } = detalles;

console.log('El volumen actual de: ', reproductor.volumen);
console.log('El segundo actual es: ' , segundo);
console.log('La canción actual de: ', cancion);
console.log('El autor es: ', autor);


//De Arrays, es por el orden ( posición en el array),  en los objetos es por el nombre de la propiedad

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;

//console.log('Personaje 1: ', p1 );
//console.log('Personaje 2: ', p2 );
console.log('Personaje 3: ', p3 );