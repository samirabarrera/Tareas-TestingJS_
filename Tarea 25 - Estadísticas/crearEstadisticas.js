/*               ESTADíSTICAS DEL EQUIPO
               
Queremos crear, recuperar y añadir información sobre tu
equipo deportivo favorito.  Bloncesto, fútbol, tenis o 
waterpolo, tú eliges.  Tu trabajo consiste en crear
datos utilizando las estructura de datos de JavaScript
disponibles: matrices y objetos.

Después de crear estas estructuras de datos en este proyecto,
siéntente libre de desafiarte a ti mismo para obtener
información valiosa de ellas.  Por ejemplo, podrí­as
querer obtener el número total de partidos que ha jugado
tu equipo o la puntuación media de todos sus partidos.


RELLENAR DATOS
Tarea 1:
Cree una estructura de datos para almacenar la información
de nuestro equipo. Declare una variable const llamada team
y configúrela como un objeto vací­o.*/

const team = {}

/*Tarea 2
Nuestro team tiene jugadores y los juegos que han jugado.
Representemos ambos agregando dos propiedades al
objeto team.  Agregue una propiedad _player y una propiedad
_games e inicialice ambas con matrices vací­as.*/

const team1 = {
    _player: this.player,
    _games: this.games
}  

/*Tarea 3
A continuación, rellene la matriz _players vací­a con
tres jugadores.
Cada jugador debe ser un objeto con tres propiedades: 
firstName, lastName y age.  
Coloque cada jugador en una nueva lí­nea para evitar
que la lí­nea se alargue demasiado.

Tarea 4
Hagamos lo mismo con nuestro array _games.  Llene el array
vací­o con tres jugadores.  Cada juego debe ser un objeto
con tres propiedades: opponent, teamPoints y opponentPoints.*/

const team2 = {
    _players: [
        {
          firstName: 'Gabriela',
          lastName: 'Noriega',
          age: 25
        },
        {
          firstName: 'María',
          lastName: 'Pérez',
          age: 29
        },
        {
          firstName: 'Carlos',
          lastName: 'Ruiz',
          age: 30
        }
      ],
    _games: [
        {
            opponent: 'Robots',
            teamPoints: 150,
            opponentPoints: 50
        },
        {
            opponent: 'Phyllis',
            teamPoints: 175,
            opponentPoints: 25
        },
        {
            opponent: 'Eagles',
            teamPoints: 140,
            opponentPoints: 75
        }
    ]
}

/*OBTENCIÓN DE DATOS
Tarea 5
Crea un método getter players para recuperar la propiedad
_players. Dentro del método getter, retorne (return) la
propiedad _players.

En este proyecto no necesitamos crear métodos setter,
porque no queremos que nadie cambie los datos guardados en
las propiedades.

Tarea 6
Cree otro método getter games para recuperar la propiedad
_games.  Dentro del método getter, retorne la propieadad
_games.*/

const team3 = {
    _players: [
        {
          firstName: 'Gabriela',
          lastName: 'Noriega',
          age: 25
        },
        {
          firstName: 'María',
          lastName: 'Pérez',
          age: 29
        },
        {
          firstName: 'Carlos',
          lastName: 'Ruiz',
          age: 30
        }
      ],
      get players(){
        return this._players
      },

    _games: [
        {
            opponent: 'Robots',
            teamPoints: 150,
            opponentPoints: 50
        },
        {
            opponent: 'Phyllis',
            teamPoints: 175,
            opponentPoints: 25
        },
        {
            opponent: 'Eagles',
            teamPoints: 140,
            opponentPoints: 75
        }
    ],
    get games(){
        return this._games
    }
}

/*Tarea 7
Queremos añadir un nuevo jugador a nuestro equipo.
Añada un método addPlayer() al objeto team.  Este método 
debe aceptar tres parámetros: newFirstName, newLastName y
newAge.

Dentro del método, crea un objeto player estableciendo los
tres paramétros como los valores de sus tres propiedades:
firstName, lastName y age.
Finalemente, agrega el el objeto player al array _players
de team.

Tarea 8
Debajo del objeto team, probemos nuestro nuevo método 
addPlayer() para agreger un nuevo jugador:
Bugs Bunny, 76 años.
Registre (console.log()) la propiedad _players de team para verificar
si  se agrego el nuevo jugador.*/

const team4 = {
    _players: [
        {
          firstName: 'Gabriela',
          lastName: 'Noriega',
          age: 25
        },
        {
          firstName: 'María',
          lastName: 'Pérez',
          age: 29
        },
        {
          firstName: 'Carlos',
          lastName: 'Ruiz',
          age: 30
        }
      ],
      get players(){
        return this._players
      },
    addPlayer(newFirstName, newLastName, newAge) {
        const players = {
            firstName: 'Bugs',
            lastName: 'Bunny',
            age: 76
        }
    }
}

console.log((team4.players))

/*Tarea 9
El anotador tiene información nueva para nosotros.
Crea un método addGame() para sumar resultados de partidos,
este método debe aceptar tres parámetros:
newOpponent, newTeamPoints y newOpponentPoints.

Dentro del método addGame(), crea un objeto game estableciendo los
tres parámetros como los valores de sus tres propiedades del objeto:
opponent, teamPoints y opponentPoints. 
Agregar el objeto game al array _games de team.

Tarea 10
Finalmente, debajo de nuestro objeto team, usa el método 
.addGame() para agregar el registro de un nuevo partido. 
Nuestro equipo jugó contra [el equipo], 
'Titans'donde obtuvimos 100 puntos y el oponente 98.*/

const team5 = {
    _games: [
        {
            opponent: 'Robots',
            teamPoints: 150,
            opponentPoints: 50
        },
        {
            opponent: 'Phyllis',
            teamPoints: 175,
            opponentPoints: 25
        },
        {
            opponent: 'Eagles',
            teamPoints: 140,
            opponentPoints: 75
        }
    ],
    get games(){
        return this._games
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const games = {
            opponent: 'Titans',
            teamPoints: 100,
            opponentPoints: 98
        }
    }
}

console.log(`Nuestro equipo jugó contra ${game.opponent}, donde obtuvimos ${game.teamPoints} puntos y el oponente ${game.opponentPoints}.`);

/*Registre la propiedad _games de teampara verificar que 
nuestro nuevo registro de juego se agregó correctamente.*/