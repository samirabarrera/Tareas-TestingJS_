/**           Catálogo escolar        
 * 
 * La universidad quiere un catálogo contenga material
 * de referencia rápida para cada escuela de la ciudad.
 * 
 * Necesitamos crear clases para primaria y secundaria.
 * Dado que estas clases comparten propiedades y métodos,
 * cada una heredará de una clase principal School.
 * Nuestra clase principal y tres clases secundarias
 * tienen las siguientes propiedades, getters, setters y
 * métodos:
 * 
 * Escuela (School)
 *  - Propiedades:
 *      - name (string)
 *      - level (una de de tres cadenas: 'prymary','midde' o 'high')
 *      - numberOfStudents (number)
 *  - Getters:
 *      - Todas las propiedades tienen getters.
 *  - Setters:
 *      - La propiedad numberOfStudents cuenta con un setter.
 *  - Métodos:
 *      - .quickFacts() y .pickSubstituteTeacher() (este es
 *         un método estático)
 * 
 * Primaria (Primary)
 *  - Incluye todo lo de la clase School, más una propiedad
 *    adicional.
 *  - Propiedad: pickupPolicy (string)
 * 
 * Medio (Middle)
 *  - No incluye propiedades ni métodos adicionales.
 * 
 * Secundaria (High)
 *  - Incluye todo lo de la clase School, más una 
 *    propiedad adicional.
 *  - Propiedad: sportsTeams (array de strings)
 * 
 * 
 * Paso 1:
 * Crea una clase padre para las clases Primary, Middle
 * y High,  Crea una clase vacia llamada School.
 *  
 * class School {
 * }
 * 
 * Paso 2:
 * Dentro de la clase School, cree un constructor()
 * vací­o que acepte tres parámetros: los
 * nombres de estos parámetros deben coincidir con las 
 * propiedades mencionadas en la descripción anterior.
 * 
 * class School {
 *  constructor ()
 * }
 * 
 * Paso 3:
 * Dentro del constructor(), establezca las propiedades
 * de School.  Anteponga un guión bajo (_) a todas las
 * propiedades.
 * 
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
}
 * 
 * Paso 4:
 * Cree getters para las propiedades name, level y 
 * numberOfStudents.  Cada getter debe devolver el valor
 * guardado en la propiedad correspondiente.
 * 
 * Paso 5:
 * Crea un setter para numberOfStudents. El método debe 
 * comprobar primero si la entrada (newNumberOfStudents)
 * es un número.
 * 
 * Si es un número, se establece la propiedad numberOfStudents.
 * Si no es un número, se registra 'Invalid input:
 * numberOfStudents must be ser to a Number.'
 * 
 class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
    get name() {
    return this._name;
  }
    get level () {
    return this._level;
    }
    get numberOfStudents () {
    return this._numberOfStudents
    }
    set numberOfStudents (newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
    this._numberOfStudents = newNumberOfStudents;
    } else {
     console.log(''Invalid input: numberOfStudents must be ser to a Number.'')}
    }
}
 * 
 * Paso 6:
 * Debajo de tus captadores, crea un método llamado
 * quickFacts() que registre la siguiente cadena en la
 * consola:
 * 
 *  SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.
 * 
 * En lugar de SCHOOL NAME, sustituye el valor name de una
 * instancia de School.
 * En lugar de NUMBER OF STUDENTS, sustituye el valor
 * numberOfStudents de una instancia de School.
 * En lugar de LEVEL, sustituye el valo de una instancia
 * level de School.
 * 
 class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
}
 * 
 * Paso 7:
 * En .quickFacts(), cree un método estático llamado
 * pickSubstituteTeacher().  Este método debe recibirá
 * un parámetro llamado substituteTeachers. 
 * El parámetro substituteTeachers tomará una 
 * matriz de cadenas.
 * 
 * Dentro del método, genere aleatoriamente un número entero
 * entre 0 y 1 menos la longitud del array substituteTeachers.
 * Use este número para acceder y devolver al profesor
 * sustituto en ese í­ndice generado aleatoriamente.
 * 
 * Método estático significa que no se puede llamar
 * directamente a través de una instancia de la clase,
 * sino que se debe llamar a través de la clase.
 * Un método estático es una función definida dentro de 
 * una clase usando la palabra clave static. 
 * No necesita una instancia de la clase para ser llamado. Se llama
 * directamente desde la clase, no desde un objeto creado con esa clase.
 * 
static pickSubstituteTeacher(substituteTeachers) {
  const randomTeacher = substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)];
return randomTeacher;
}
 * 
 * Crear una clase de escuela primaria.
 * Paso 8:
 * A continuación, crea una clase llamada PrimarySchool
 * que extienda la clase School.
 * 
 class PrimarySchool extends School {}
 * 
 * Paso 9:
 * Dentro de la clase PrimarySchool, crea un constructor()
 * que acepte tres argumentos.
 * 
 class PrimarySchool {
 constructor(name, level, numberOfStudents) {
  }
 }
 * 
 * Paso 10:
 * Realiza la llamada super() en la primera lí­nea del
 * constructor(name, 'primary', numberOfStudents) de 
 * PrimarySchool.
 * Dado que esta es la subclase PrimarySchool, le hemos
 * pasado 'primary' como valor de la propiedad level
 * al constructor padre School.
 * 
 * paso 11:
 * El tercer argumento es pickupPolicy.
 * 
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);

    this._pickupPolicy = pickupPolicy;
  }
}
 * 
 * Paso 12:
 * Dado que nuestra clase PrimarySchool hereda de Schools,
 * las propiedades y los getters, solo necesitamos crear
 * un getter en la clase PrimarySchool.
 * Añadelo a la clase PrimarySchool. Cada getter debe
 * devolver el valor guardado en esa propiedad.
 * 
get pickupPolicy() {
    return this._pickupPolicy;
  }
 * 
 * Paso 13:
 * En esta tarea, creará una clase HighSchool que extienda
 * la clase School.  Además de las propiedades, los 
 * captadores y los métodos de la clase School.
 * HighSchool incluye lo siguiente:
 * Propiedades:
 *   - sportsTeams (array de strings)
 *   - Captadores: un captador para la matriz sportsTeams.
 *       el captadordebe registrar todos los eventos
 *       deportivos en la consola.
 * 
 * Siga estos pasos para completar la tarea:

    - Crea una clase HighSchool vací­a que extienda School.
    - Crea un constructor()que acepte argumentos para name,
      numberOfStudents, y sportsTeams.
    - En la primera lí­nea de constructor(), llame super 
      y pase name, 'high', y numberOfStudents como argumentos.
    - En la siguiente lí­nea, configure la propiedad sportsTeams 
      usando this._
    - Bajo constructor(), crea un captador para sportsTeams.
    - íšsa console.log() para imprimir el valor sportsTeams 
      en la consola.

 *Paso 14:
 * Crea una instancia PrimarySchool con las siguientes
 * Propiedades:
 *   name:'Lorraine Hansbury'
     numerOfStudents:514
     pickupPolicy:'Students must be picked up by a parent, guardian, or a family member over the age of 13.' 
 * Guarde la instancia en una variable llamada lorraineHansbury.
 * 
 const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);
 * 
 * Paso 15: Llamar  a .quickFacts() con la instancia lorraineHansbury.
 * 
 lorraineHansbury.quickFacts()
 * 
 * Paso 16:
 * La directora Lorraine Hansbury necesita un sustituto para el dí­a.
 * Invoca a .pickSubstituteTeacher() en School, y pasa el siguiente
 * argumento:
 * ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
 * 
 * const teachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
const substitute = School.pickSubstituteTeacher(teachers);
console.log(substitute);
 *
 *Paso 17:
   *Crea una instancia de HighSchool con las siguientes Propiedades:
      name: 'Al E. Smith',
        numberOfStudents: 415,
        sportsTeams: ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']

    Guarda la instancia en una variable llamada alSmith.

const alSmith = new HighSchool(
  'Al E. Smith',
  415,
  ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
);

* Paso 18: Obten el valor guardado en la propiedad sportsTeams en alSmith.

console.log(alSmith.sportsTeams);

 Paso 19:
 Buen trabajo, si quieres continuar practicando, puedes:

    Crear una clase de escuela secundaria.
    Agregue más propiedades a cada clase 
    ( averageTestScores, schoolOverview, etc.).
    Crea una clase llamada SchoolCatalogque contenga 
    una colección de escuelas. 
    Crea una instancia de SchoolCatalogpara escuelas primarias, 
    secundarias y preparatorias.
*/