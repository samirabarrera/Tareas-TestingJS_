/*        Documentación del iterador      

Existen muchos métodos incorporados (built-in) de matrices,
la lista completa de cuales son la puedes encontrae 
en MDN's Array iteration methods page
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

La documentación de cada método contiene varias seccione:

1. Una descripción corta de lo que hace el método.
2. Un bloque con la sintaxis del método.
3. Una lista de parámetros que acepta o requiere el método.
4. El valor de retorno de la función.
5. Una extensa descripción.
6. Ejemplos de uso.
7. Información adicional.

En las siguientes instrucciones, hay algunos errores
en el código. Utilia la documentación de un método
determinado para determinar el error o completa
el espacio en blanco para que el código
se ejecute correctamente.
*/

/*INSTRUCCIONES:
    
    Paso 1:
    En el código existe una matriz llamada words.
    Queremos crear una nueva matriz de palabaras
    interesantes.
    Lo primero que queremos hacer es comprobar si hay
    palabras con una longitud inferior a 6 caracteres.
    Hay una falla en la llamada al método words.some().
    Corrija este método para que true se muestre en consola.
    
    Para obtener más información consulte la
    documentación del método some() en MDN.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    
    
    PASO 2:
    El método .some() devolvió true, lo que significa que
    hay palabras en la matriz con menos de seis caracteres.
    Use el método .filter() para guardar las palabras
    con más de 5 caracteres en una nueva variable llamada
    interestingWords, declarada como const

    PASO 3:
    En la última lí­nea esta el código
    console.log(interestingWords.every((word) => { } ));

    Completa el código entre paréntesis para comprobar
    si cada elemento tiene más de 5 caracteres.
    Si lo hace, el resultado será true.
    
    */
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Falta algo en la llamada al método a continuación.


console.log(words.some(() => {
  return word.length < 6;
}));

// Utiliza filter para crear un nuevo array



// Asegurate de descomentar el siguiente código y arregla
// el error antes de ejecutarlo

// console.log(interestingWords.every((word) => { } ));