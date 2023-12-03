//1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
let vacio = [];
let aleatorio1 =  Math.random();
let aleatorio2 =  Math.random();
let aleatorio3 =  Math.random();
let aleatorio4 =  Math.random();
let aleatorio5 =  Math.random();
let aleatorio6 =  Math.random();
let aleatorio7 =  Math.random();
let aleatorio8 =  Math.random();
let aleatorio9 =  Math.random();
let aleatorio10 = Math.random();

let numaleatorios= [aleatorio1,aleatorio2,aleatorio3,aleatorio4,aleatorio5,aleatorio6,aleatorio7,aleatorio8,aleatorio9,aleatorio10];
console.log(numaleatorios);

/*2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir 
en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.*/
    let palabra1 = prompt('Ingrese primera palabra');
    let palabra2 = prompt('Ingrese segunda palabra');
    let palabra3 = prompt('Ingrese tercera palabra');
    let palabra4 = prompt('Ingrese cuarta palabra');
    let palabra5 = prompt('Ingrese quinta palabra');
let palabras = [palabra1,palabra2,palabra3,palabra4,palabra5];
console.log(palabras);
/*3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra 
el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.*/
let numeros = [10,40,30,20,15,5];
console.log(numeros.sort(function(a, b) {return a - b})); //Ordenados de Menor a Mayor
let max = Math.max(...numeros);
console.log(max);
let min = Math.min(...numeros);
console.log(min);


