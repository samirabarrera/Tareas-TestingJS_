/*              MÉTODO .forEach()        

El primer método de iteración que vamos a aprender es .forEach().

Acertadamente nombrado, .forEach() ejecutará el mismo código para cada 
elemento de una matriz.*/

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function(groceryItem) { //callback function
  //groceryItem es el parámetro de la función de devolución de llamada.
  console.log(' - ' + groceryItem);
})

/*El código anterior registrará una lista de compras con un formato correcto
en la consola.  Exploremos la sintaxis para invocar a .forEach().

    + groceries.forEach() llama al método forEach en la matriz groceries.
    + .forEach() toma un argumento de una función de devolución de llamada.
      Recuerde que una función de devolución de llamada es una función
      que se pasa como argumento a otra función.
    + El bucle .forEach() recorre las matriz y ejecuta la función de 
      devolución de llamada para cada elemento.
      Durante cada ejecución, el elemento actual se pasa como
      argumento a la función de devolución de llamada.
    + El valor de retorno para .forEach() siempre será undefined.
    
Otra forma de pasar una devolución de llamada .forEach() es utilizar la
sintaxis de función de flecha.*/

groceries.forEach(groceryItem => console.log(groceryItem));

/*Tambien podemos definir una función de antemano para utilizarla
como función de devolución de llamada */

function printGrocery(element){
    console.log(element);
  }
  
  groceries.forEach(printGrocery);

  /*El ejemplo anterior utiliza una declaración de función, pero también
  puedes utilizar una expresión de función o una función de flecha.
  
  Los tres fragmentos de código hacen los mismo.  En cada método de 
  iteración de array, podemos usar cualquiera de los tres ejemplos
  para proporcionar una función de devolución de llamada como 
  argumento del iterador.  Es importante conocer las diferentes maneras
  de pasar una función de devolución de  llamada (callback) como argumentos
  de iteradores.  Debido a que los desarrolladores tienen diferentes 
  preferencias estilí­sticas, no obstante, debido a la fuerte adopción de
  ES6, utilizaremos la sintaxis de funciones de flecha en los ejercicios
  posteriores. 
  */

  /*Ejercicio: 
    Itera sobre la matriz fruits para registrar 'I want to eat a ' el nombre
    de cada fruta en la consola.  Por ejemplo, 'I want to eat a banana'.
  */
    const fruits = ['mango', 'papaya', 'pineapple', 'apple'];