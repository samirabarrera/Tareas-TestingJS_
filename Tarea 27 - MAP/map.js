/*                  El método .map()      

El segundo iterador que vamos a cubrir es .map().

Cuando .map() se invoca en una matriz, toma un argumento de una 
función de devolución de llamada (callback) y devuelve una nueva matriz..
Observa el ejemplo de llamada .map():
*/
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

/* .map() funciona de manera similar a .forEach(). La principal
diferencia es que .map() devuelve una nueva matriz. 

En el ejemplo anterior
 
 + numbers es una matriz de números.
 + bigNumbers almacenará el valor de retorno de la llamada .map() a
   *numbers.
 + numbers.map iterará a través de cada elemento de la matriz numbers y
   pasará el elemento a la función de devolución de llamada (callback).
 + return number * 10 es el código que queremos ejecutar en cada elemento
   del array.  Esto guardará cada valor del array numbers multiplicado
   por 10 en la matriz bigNumbers.

   Observemos a numbers y bigNumbers:
   */
   console.log(numbers); // Output: [1, 2, 3, 4, 5]
   console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

/*EJERCICIO: 
   
Paso 1:
Añade tu código debajo de la matriz animals y antes de la lí­nea 
console.log(secretMessage.join(''));
*/
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

  // Create the secretMessage array below
  
console.log(secretMessage.join(''));
    
const bigNumbers2 = [100, 200, 300, 400, 500];
    
  // Create the smallNumbers array below

const smallNumbers = []

/*
Paso 2:
Utiliza .map() para dividir todos los números bigNumbers
entre  100.  Guarda los valores devueltos en una variable
declarada con const llamada smallNumbers*/

console.log()