/*
    ===== Código de TypeScript =====
*/
// Encadenamiento opcional
interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
};

const pasajero2: Pasajero = {
    nombre: 'Maria',
    hijos: ['Ainoa', 'Julio']
}

function imprimeHijos ( pasajero: Pasajero): void {
    // Aqui la ? sirve para que intente hacer lo siguiente, si es seguro hacerlo y sino tratalo como undefined
    const cuantosHijos = pasajero.hijos?.length || 0; 

    console.log (cuantosHijos);
}

imprimeHijos (pasajero2);

imprimeHijos (pasajero1);