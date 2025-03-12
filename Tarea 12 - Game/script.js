let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/*TAREA 1
Crea una función generateTarget().  Esta función debe
devolver un número entero aleatorio entre 0 y 9.

El propósito de estafunción es llamarse al comienzo de 
cada nueva ronda para generar el nuevo número objetivo 
secreto.*/

function generateTarget () {
  return Math.floor(Math.random() * 10)
}

/*TAREA 2
Crea una función compareGuesses(). Esta función:

 * Tiene tres parámetros que representan la suposición
   del usuario (humano), una suposición de la computadora
   y el número objetivo secreto que se debe adivinar.

 * Determina qué jugdor (humano o computadora) gana
   en función de la conjeura más cercana al objetivo.
   Si ambos jugadores están empatados, el usuario
   humano debería ganar.

 * Devuelve true si el jugador humano gana y false si
   el jugador de la computadora gana.

El proposito de esta función es llamarla en cada
ronda para determinar qué conjetura es la más
cercana al número objetivo.
   */

function compareGuesses (humanScore, computerScore, secretTarget) {
  const humanGuess = Math.abs(humanScore - secretTarget);
  const computerGuess = Math.abs(computerScore - secretTarget);

  return humanGuess <= computerGuess;
}

/*TAREA 3 
Crea una función updateScore().  Esta función:
    * Tiene un único parámetro.  Este parámetro será un
      valor de cadena que representa al ganador.
    * Aumenta la variable de puntuación (humanScore o
      computerScore) en 1 según el ganador que se pasa
      a updateScore. La cadena que se pasa será 'human'
      o 'computer'.
    * No es necesario devolver ningún valor.

El propósito de esta función es utilizarse para aumentar
correctamente la puntuación del ganador después de 
cada ronda.*/

function updateScore (ganador) {
  if (ganador === 'human') {
    humanScore++;
  } else if (ganador === 'computer') {
    computerScore++;
  }
}

/*TAREA 4
Crea una función advanceRound().  Esta función debe
incrementar elvalor de currentRoundNumber en 1.

El propósito de esta función es actualizar el número de ronda
después de cada ronda.

Después de completar el juego advanceRound(), su juego Number
Guesser debería estar completamente operativo.
Debería poder adivinar, ver cómo su puntaje o el de la
computadora aumentan correctamente, pasar a la siguiente
ronda y ver la ronda correcta en la pantalla.*/

function advanceRound() {
  currentRoundNumber++;
}

/*TAREA 5 
Comprueba que tu código funciona correctamente 
invocando las funciones que acabas de escribir en 
script.js con entradas de muestra. 
Puedes eliminar este código una vez que estés 
convencido de que todo funciona como debería.*/

/*TAREA 6 
Ejecuta tu código y juega algunas rondas del juego
para asegurarte de que todo funciona como debería.*/