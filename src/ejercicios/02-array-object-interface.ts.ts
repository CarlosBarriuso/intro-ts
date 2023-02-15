/*
    ===== Código de TypeScript =====
*/

//Arrays
let habilidades: (boolean | string | number) [] = ['Bash', 'Counter', 'Healing', 100]; // asi infiere a que se puedan usar boolean, string y number dentro del array
let verbos : string[] = ['Comer, Andar', 'Dormir']; //Forma correcta de definir un array incluyendo el tipo que va a contener

//Objetos

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; //con  la ? hacemos que cuando se defina un Personaje este campo sea opcional
}
const personaje: Personaje = {
    nombre: 'Pepito',
    hp: 100,
    habilidades: ['Bahs', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );