/*
    ===== Código de TypeScript =====
*/

//Funciones
function sumar(a: number, b: number): number { //se fuerza a  que tipo devuelto sea un numero
    return a + b;
}


//funcion de flecha
const sumarFlecha = (a: number,b: number): number => {
    return a + b;
}

//Argumentos
//El orden en los parametros es el siguiente: obligatorios, opcionales y los argumentos que tienen algún valor por defecto
function multiplicar( numero: number, otroNumero?: number, base: number = 2): number { 
    return numero + base;
}

const resultado = sumar(10, 20);

const resulArgumentos = multiplicar (5); //el resultado es 10

console.log(resultado);

interface PersonajeLor {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

//void no regresa nada
function curar ( personaje: PersonajeLor, curarX: number ): void {

    console.log( personaje );
} 

const nuevoPersonaje: PersonajeLor = {
    nombre: 'Juan',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida: ,' + this.pv );
    }
}

curar( nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();