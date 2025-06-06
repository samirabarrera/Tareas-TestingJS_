/**               Libreria        
 * 
 * Te han contratado como programador para crear una
 * librería que permita gestionar los tipos de 
 * medios diferentes que se pueden prestar:
 * libros, CDs y películas.
 * 
 * En este proyecto, crearemos una clase padre Media con
 * tres subclases: Book, Movie y CD.  Esta tres subclases
 * tienen las siguientes propiedades y métodos:
 * 
 * Libro:
 * Propiedades:
 *   -author (string)
 *   -title (string)
 *   -pages (number)
 *   -isCheckedOut (boolean, inicializado a false)
 *   -ratings (inicialmente un array vacío)
 * Getters: todas las propiedades tienen un getter.
 * Métodos:
 *   -getAverageRating(),
 *   -toggleCheckOutStatus()
 *   -addRating()
 * 
 * Película:
 * Propiedades:
 *      - director (string)
 *      - title (string)
 *      - runTime (number)
 *      - isCheckedOut (boolean, inicializado a false)
 *      - ratings (inicialmente un array vacío)
 * 
 * Getters: todas las propiedades tienen un getter.
 * Métodos:
 *       - getAverageRating()
 *       - toggleCheckOutStatus()
 *       - addRating()
 * 
 * CD:
 * Propiedades:
 *      - artist (string)
 *      - title (string)
 *      - isCheckedOut (boolean, inicializado false)
 *      - ratings (inicialmente un array vacío)
 *      - songs (array de strings)  
 */

/*Ejercicio:
Paso 1:
Comencemos creando una clase padre para nuestras clases 
Book, CD y Movie.
Crea una clase vacía llamada Media 

class Media {
}

Paso 2:
Dentro de la clase Media cree un método constructor()
vacío que tome un parámetro.
Este argumento establecerá la única propiedad que
está en las tres subclases de Media y no tiene
un valor predeterminado 

class Media {
    constructor() {
    }
}

Paso 3:
Dentro del constructor, establezca los valores
de las propiedades de Media que comparten Book,
CD y Movie.  Anteponga un guión bajo (_) a todos
los nombres de propiedad.

class Media {
    constructor (title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }
}

Paso 4:
Crea getters para las propiedades title, isCheckedOut
y ratings.  Cada captador debe devolver el valor
guardado en la propiedad correspondiente.

Paso 5:
Crea un establecedor (setter) para la propiedad
isCheckedOut.

Paso 6:
Debajo de sus captadores, cree un método llamado
toggleCheckOutStatus que cambien el valor guardado
en la propiedad _isCheckedOut

class Media {
    constructor (title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }
    get title () {
        return this._title;
    }
    get isCheckedOut () {
        return this._isCheckedOut;
    }
    get ratings () {
        return this._ratings;
    }
    
    set isCheckedOut (setter) {
        this._isCheckedOut = setter
    }

    toggleCheckOutStatus () {
        this._isCheckedOut = !this._isCheckedOut;
    }
}

Paso 7:
Debajo de toggleCheckOutStatus(), crea un método llamado 
getAverageRating. Este debe devolver el valor promedio 
de la matriz ratings.

Utilice el método de reduce para hallar la suma del 
array ratings. Divida esta suma entre la longitud del 
array ratings y devuelva el resultado.

Pista:
El código siguiente calcula la suma de los números 
guardados en la matriz ratings.

let ratingsSum = this.ratings.reduce((currentSum, rating) =>
    currentSum + rating, 0);

Puede acceder a la longitud de una matriz utilizando .length
const lengthOfArray = myArray.length;

toggleCheckOutStatus () {
        this._isCheckedOut = !this._isCheckedOut;
    }

getAverageRating () {
    if (this.ratings.lenght === 0) return 0;
    let ratingsSum = this.ratings.reduce((currentSum, rating) =>
    currentSum + rating, 0);
    return ratingsSum / this._ratings.lenght;
}

Paso 8:
Agreguemos un método llamado addRating que acepta un 
argumento y  usa .push()para agregarlo al final de la  
matriz ratings.

    addRating (argumento) {

    }

Paso 9:
Completa la clase Book (ve al paso a paso, paso 10)
Paso 10:
Dentro de la clase Book, 
cree un constructor que acepte tres argumentos. 
Estos argumentos se utilizan para establecer propiedades 
sin valores predeterminados.
Paso 11:
Llama  en la primera línea a super del método constructor
de Book. Pásale cualquier argumento que use el 
constructor principal.
Paso 12:
Utilice los argumentos restantes para establecer las 
propiedades author y pagesBook.
Paso 13:
Dado que nuestra clase Book hereda las propiedades y los 
captadores de Media, solo necesitamos crear dos nuevos 
captadores en la clase Book.
Agregue dos nuevos getters a la clase Book. 
Cada getter debe devolver el valor guardado en su 
propiedad correspondiente.

class Media {
    constructor (title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }
    get title () {
        return this._title;
    }
    get isCheckedOut () {
        return this._isCheckedOut;
    }
    get ratings () {
        return this._ratings;
    }
    
    set isCheckedOut (setter) {
        this._isCheckedOut = setter
    }

    toggleCheckOutStatus () {
        this._isCheckedOut = !this._isCheckedOut;
    }
        getAverageRating () {
        if (this.ratings.lenght === 0) return 0;
        let ratingsSum = this.ratings.reduce((currentSum, rating) =>
        currentSum + rating, 0);
        return ratingsSum / this._ratings.lenght;
        }

    
}

Paso 14:
Crear una clase Movie completa usando solo las 
especificaciones de propiedad, captador y método a 
continuación:
propiedades : director(cadena), title(cadena), 
              runTime(número), isCheckedOut(booleano, 
              inicialmente false) y 
              ratings(matriz, inicialmente vacía)
getters : todas las propiedades tienen un getter
métodos : .getAverageRating(), .toggleCheckOutStatus(), 
           y.addRating()

Siga estos pasos para crear una Movieclase que extienda Media:

Crea una clase Movie vacía que extienda Media.
Crea un constructor que acepte argumentos para director, 
title, y runTime.
En la primera línea del constructor,  super y pása title.
En las siguientes dos líneas, configure sus 
propiedades _director y _runTime.
Debajo del constructor, cree los getters para director 
y runTime. 
Cada getter debe devolver el valor guardado en esa 
propiedad.

Paso 15:
Crea una instancia Book con las siguientes propiedades:
*Author: 'Bill Bryson'
*Title: 'A Short History of Nearly Everything'
*Pages: 544

Guarda esta instancia en una variable llamada
historyOfEverything. 


Paso 16:
Realiza una llamada a toggleCheckOutStatus() en la
instancia historyOfEverything.

Paso 17:
Registra en consola el valor guardado en la propiedad
isCheckedOut de la instancia historyOfEverything.

Paso 18:
Llama 3 veces al método addRating() en la instancia
historyOfEveryThing con las entradas 4, 5 y 5.

Paso 19:
Llama al método getAverageRating() en la instancia
historyOfEverything y registra el resultado en consola.

Paso 20:
Crea una instancia Movie con las siguientes propiedades:
director: 'Jan de Bont',
title: 'speed', 
runTime: 116

Guarda esta instancia en una variable llamada speed.

Paso 21:
Realiza una llamada a toggleCheckOutStatus() en la
instancia speed.

Paso 22:
Registra en consola el valor guardadp en la propiedad
isCheckedOut de la instancia speed.

Paso 23:
Llama 3 veces al método addRating() en la instancia
speed con las entradas 1, 1, y 5.

Paso 24:
Llama al método getAverageRating() en la instancia 
speed y registre el resultado en consola

Paso 25:
Felicitaciones, has completado el ejercicio.
Si desea seguir trabajando en este proyecto, hemos 
enumerado algunas vías para continuar con su progreso 
actual.

Agregue más propiedades a cada clase 
( movieCast, songTitles, etc.)

Crea una  claseCD que extienda Media.

En .addRating(), asegúrese de que la entrada esté entre 
1 y 5.
Crea un método llamado shuffle para la clase CD. 
Este método devuelve una matriz aleatoria de todas las 
canciones de la propiedad songs.
Crea una clase llamada Catalog que contenga todos los 
elementos Media de nuestra biblioteca.
*/