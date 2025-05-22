/*             Debugging Review    

Acabas de aprender técnicas para ayudarte a superar cualquier
situación de depuración.
Resumamos lo aprendido en un proceso de depuración:

1. ¿Tu código genera errores? Si es así­, consulta el 
   seguimiento de errores para conocer el tipo, la
   descripción y la ubicación del error.  Accede a la
   ubicación del error e intenta solucionarlo.
   
2. ¿Tu código está roto pero no genera errores?
   Revisalo usando declaraciones console.log().
   Cuando se produzcan resultados inesperados, aí­sle el 
   error e intente solucionarlo.
  
3. ¿Encontraste el error siguiendo los pasos 1 y 2, pero
   no puedes solucionarlo?
   Consulta la documentación para asegurarte de usar 
   correctamente todas las funciones de JavaScript.
   Si sigues sin poder solucionarlo, busca el problema
   en Google y consulta Stack Overflow para obtener ayuda.
   También puedes utilizar inteligencia artificial, pero
   ten cuidado con el código que esta genere
   
Puede llevar algo de tiempo y práctica, pero  así­ es como
todos los desarrolladoresresuelven sus problemas, así­
que no te rindas y serás un experto en poco tiempo.*/


/*Ejercicio:
En el editor de código, le proporcionamos una 
implementación fallida de una función llamada 
isStringPerfectLength(). 
Esta función toma una cadena (string), con una longitud
mí­nima ( minLength) y una longitud máxima ( maxLength). 
Debe devolver si el valor proporcionado string está 
dentro del rango de las dos longitudes. 
Más especí­ficamente, si es más largo que el valor 
minLength y más corto que el valor maxLength.

Hemos proporcionado tres casos de prueba de ejemplo al 
final del archivo. 
El primero comprueba si la cadena 'Dog'está en el rango 
de longitud de 2 y 4. En este caso, la función deberí­a 
devolver la función true porque la longitud de la cadena 
es 3, que se encuentra entre esos dos valores. 
Los dos ejemplos siguientes fallan. 
El primero falla porque la cadena es demasiado larga. 
El segundo falla porque la cadena es demasiado corta.

Utilizando el proceso de depuración que aprendió, 
descrito anteriormente, busque y corrija todos los 
errores en este código.

El código te mostrará errores desde el principio, 
pero recuerda, ¡es algo bueno! Creemos que ya tienes 
todas las habilidades para depurarlo. 
¡No te rindas y muéstranos lo que has aprendido! 
Sabemos que puedes lograrlo.*/

//Descomenta el siguiente código para ver el error
/** 
function isStringPerfectLength(string, minLength, maxLength {
  const stringLength = string.length;
  
  if (stringLenth > minLength) {
    return false;
  } else if (stringLenth < maxLength) {
    return false;
  } else {
    return true;
  }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));
*/