/*Sabes mucho sobre sintaxis, el flujo de control y las funciones de 
JavaScript, ahora reforzaremos esas habilidades. 

Realiza lo siguiente en un mismo script.*/

/* TAREA 1
Escribe una función greetWorld(). Tu función no debe tener parámetros y
debe devolver a cadena 'Hello, World!'.
Puedes usar declaración de funciones o expresión de funciones.*/

function greetWorld() {
    return console.log ('Hello, World!')
}

/*TAREA 2
La edad mí­nima más común para votar es de 18 años.  Escribe una función
canIVote() que tome un número que represente la edad de la persona y
devuelva el valor booleano true si tiene 18 años o más, y el
valor booleano false si no los tiene. Muestralo en consola

Realiza la prueba con:
console.log(canIVote(19));*/

function canIVote(age) {
  return age >= 18;
}

console.log(canIVote(19)); 

/* TAREA 3
Escriba una función, agreeOrDisagree(), que tome dos cadena y devuelva
'You agree!' si las dos cadena son iguales y 'You disagree!' si las
dos cadenas son diferentes. Muestra el resultado en consola.

Prueba tu código con:
console.log(agreeOrDisagree("yep", "yep"))*/

function agreeOrDisagree(cadena1, cadena2) {
  if (cadena1 === cadena2)
    return 'You agree!'
  else {
    return 'You disagree!'
  }
}

/* TAREA 4
Escribe una función, lifePhase(), que tome la edad(age) de una persona como
número y devuelva en qué fase de la vida se encuentra.

Aquí­ estan las clasificaciones:
 0- 3 deberá devolver 'baby'
 4-12 deberá devolver 'child'
13-19 deberá devolver 'teen'
20-64 deberá devolver 'adult'
65-140 deberá devolver 'senior citizen'

Si el número es menor que cero o mayor que 140, el programa
deberá devolver 'This is not a valid age'*/

function lifePhase(age) {
  if (age >= 0 && age <= 3) {
    return 'baby';
  } else if (age >= 4 && age <= 12) {
    return 'child';
  } else if (age >= 13 && age <= 19) {
    return 'teen';
  } else if (age >= 20 && age <= 64) {
    return 'adult';
  } else (age >= 65 && age <= 140); {
    return 'senior citizen'
  }
}

/*TAREA 5
Escribe una función, finalGrade(). Deberá:

* Toma tres argumentos de tipo número.
* Encuentra el average de esos tres números
* Devuelve la calificación de la letra (como una cadena) 
  average a la que corresponde.
* Devuelve 'Ha ingresado una calificación no válida' si alguna de 
  las tres calificaciones es menor que 0 o mayor que 100.

    0-59 deberá devolver: 'F'
    60-69 deberá devolver: 'D'
    70-79 deberá devolver: 'C'
    80-89 deberá devolver: 'B'
    90-100 deberá devolver:'A'*/

function finalGrade(num) {
  if (num)
    return;
}

/*TAREA 6
Escribe una función reportingForDuty(), que tenga dos parámetros string,
rank y lastname, y retorne una string en el siguiente formato:
'rank lastName reporting for duty'

reportingForDuty('Private', 'Fido') 
// Deberá retornar 'Private Fido reporting for duty!'

/*TAREA 7
Arregla el código
Te presento una función rollTheDice(), la cual supuestamente
simula el lanzamiento de dos dados y el total de los dados.
La función casí­ funciona, pero hay algunos errores.
Â¿Puedes arreglar el código, por favor?

const rollTheDice = () => {
  // Math.random() nos da un numero random desde 0 pero no incluye el 1
  //Multiplicamos ese número por 6 para tener un número entre 0 y 6 pero no logramos 
  //incluir el 6
  // para lograrlo hemos intentado lo siguiente sumamos 1
    let die1 = Math.random() * 6 + 1
    let die2 = Math.random() * 6 + 1
    return die1 + die2
}


/*TAREA 8
Aunque la masa de un objeto permanece constante en todo el universo, 
el peso está determinado por la fuerza de gravedad que ejerce sobre él. 
Como cada planeta tiene una gravedad diferente, el mismo objeto pesará 
cantidades distintas en cada uno de esos planetas.

Escribe una función, calculateWeight(). Deberá:
* Tener dos parámetros: earthWeight y planet
* Espera que earthWeight sea un número
* Espera que planet sea una string
* devuelve un número que representa el peso de la Tierra equivalente al planet 
  ingresado.

Manejar los siguientes casos:
'Mercury'peso = earthWeight* 0,378
'Venus'peso = earthWeight* 0,907
'Mars'peso = earthWeight* 0,377
'Jupiter'peso = earthWeight* 2,36
'Saturn'peso = earthWeight* 0,916
Para todas las demás entradas, 
devuelva'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

Pruebalo con:
console.log(calculateWeight(100, 'Jupiter')) // Should print 236


/*TAREA 9
Puede resultar difí­cil hacer un seguimiento de lo que es verdadero o 
falso en JavaScript . 
Escriba una función, truthyOrFalsy(), que acepte cualquier valor y 
devuelva true si ese valor es verdadero y false si ese valor es falso .
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/

/*TAREA 10 
Las personas tienen muchos amigos, pero a veces creen tener más,
se ha realizado un estudio y se ha determinado que la cantidad
de amigos imaginarios de una persona es igual a la cantidad
de amigos por 0.25 es decir un 25% de sus amigos o 1/4 de ellos.

Escribe una función, numImaginatyFriends() que tome el número
de amigos de una persona y devuelva el número de amigos
imaginarios que tiene esa persona.
Debido a que los amigos solo pueden venir en números enteros,
deberás redondear el resultado al entro más cercano anter de
retornarlo.
La función Math.ceil() te resultará útil.

Utiliza las siguientes lí­neas de código para realizar la prueba
console.log(numImaginaryFriends(20)) // Debe imprimir5
console.log(numImaginaryFriends(10)) // debe imprimir 3

*/

/*TAREA 11
Escribe una función, sillySentence(), que contenga 3 parámetros de
cadena y devuelva la siguiente oración tonta con los espacios
en blanco completados por los argumentos pasados a la función

    I am so (adjetive) becouse I (verb) coding! Time to write
              some more awesome (noum) !

La llamada a sillySentence('excited', 'love', 'functions') 
deberá retornar 'I am so excited because I love coding! Time
to write some more awesome functions!'   

Utiliza la siguiente lí­nea de código para realizar la prueba
console.log(sillySentence('excited', 'love', 'functions')) 
*/

/*TAREA 12
Escribe una función, howOld(), que tome dos parámetros numéricos, 
age y year, y devuelva cuántos años tendrá una persona con esa 
edad en ese año.

Debe tratar tres casos diferentes:

*Si el year está en el futuro, debe devolver:
 'Tu tendrás [age calculada] en el año [year].

*Si el year es anterior alnacimiento, debe devolver una cadena con el
 siguiente formato:
 'El año [year] fue [numero de años calculados] años antes de nacer'

 *Si el year es en el pasado pero no anterior al año de nacimiento de
 la persona, debe devolver:
  'Tu tenias [age calculada] en el año [year del pasado] 
  
  Utiliza en tu función::
     let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
  */

/*TAREA 13
Arregla el código roto:

Dado el porcentaje de ADN compartido entre dos personas, se puede calcular 
su probable relación familiar .

Escribimos una función, whatRelation(), que tiene un parámetro numérico, 
percentSharedDNA, y devuelve la relación probable. 
Esperamos que el número que se ingrese sea siempre un entero entre 0 y 100, pero por alguna razón no funciona.

Así­ es como se supone que debe calcularse la relación:

100 deberán regresar'You are likely identical twins.'
35-99 deberá regresar'You are likely parent and child or full siblings.'
14-34 deberá regresar'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
6-13 deberá regresar'You are likely 1st cousins.'
3-5 deberán regresar'You are likely 2nd cousins.'
1-2 deberá regresar'You are likely 3rd cousins.'
0 deberá regresar'You are likely not related.'

¡Lamentablemente no está funcionando como queremos!

whatRelation(34) 
// Should return 'You are likely grandparent and grandchild, 
// aunt/uncle and niece/nephew, or half siblings.'
// But instead it's returning 'You are likely 1st cousins.'

whatRelation(3)
// Should return 'You are likely 2nd cousins.'
// But instead it's returning 'You are likely grandparent and grandchild, 
// aunt/uncle and niece/nephew, or half siblings.'

El código que está roto es el siguiente:

  const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA < 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'

Puedes arreglarlo? */


/*TAREA 14
Calculadora de propinas tipCalculator()
Cree una función, tipCalculator(), que tenga dos parámetros, una cadena que represente qualityel servicio recibido y un número que represente el totalcosto.

Devuelve la propina, como un número, en función de lo siguiente:
'malo' debe devolver una propina del 5%
'ok' debe devolver una propina del 15%
'bueno' debe devolver una propina del 20%
'excelente' debe devolver una propina del 30%
todas las demás entradas deben tener como valor predeterminado el 18%.

tipCalculator('good', 100) // Should return 20

*/

/*TAREA 15
Escriba una función, toEmoticon(), que tome una cadena y devuelva el emoticón correspondiente como cadena. Utilice un modificador/caso y cubra estos casos:

'shrug'deberá regresar '|_{"}_|'
'smiley face'deberá regresar ':)'
'frowny face'deberá regresar ':('
'winky face'deberá regresar ';)'
'heart'deberá regresar '<3'
cualquier otra entrada deberá regresar'|_(* ~ *)_|' */