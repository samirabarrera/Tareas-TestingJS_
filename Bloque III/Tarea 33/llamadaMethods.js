/**            Llamadas a métodos
 * 
 * Utilizaremos nuestor métodos para acceder y manipular
 * las instancias de nuestra clase Dog.
 */

class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }
    
    get name() {
        return this._name;
    }
    
    get behavior() {
        return this._behavior;
    }
    
    incrementBehavior() {
        this._behavior++;
    }
}

const halley = new Dog('Halley');

/**En el ejemplo anterior, creamos la clase Dog, luego
 * creamos una instancia de Dog y la guardamos
 * en una variable llamada halley.
 * 
 * La sintaxis para llamar a métodos y getters en
 * una instancia es la misma que para llamar a los 
 * objetos: se añade un punto a la instancia y luego el
 * nombre de la propiedad o método.  para los métodos,
 * también se deben incluir paréntesis de apertura y
 * cierre.
 * 
 * Tomemos un momento para crear dos instancia Dog y
 * llamar a nuestro método incrementBehavior() en una de
 * ellas.
 */
let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console

/**En el ejemplo anterior, creamos dos instancias Dog nuevas,
 * nikko y bradford.  Daso que incrementamos el
 * comportamiento de nuestra instancia nikko, pero no
 * bradford, accediendo a nikko.behavior retorna 1 y
 * accediendo a bradford.behavior retorna 0.
 */

/**Ejercicio:
 * Paso 1:
 * Al final del siguiente código, use console.log() para
 * imprimir el valor guardado en la propiedad name del
 * objeto surgeonRomero.
 */
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

/**Paso 2: 
 * Realiza una llamada al método takeVacationDays() en
 * la instancia surgeonRomero, pasando el argumento 3.
*/

/**Paso 3:
 * Después de la llamada al método takeVacationDays(), 
 * utilice console.log() para imprimir el valor
 * guardado en la propiedad remainingVacationDays
 * de la instancia surgeonRomero.
 */