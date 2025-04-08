/*             La palabra clave this       

Los objetos son colecciones de datos y funcionalidades relacionadas.
Almacenamos esas funcionalidades de nuestros objetos en métodos:
*/
const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    }
  };

/*En nuestro objeto goat tenemos un método .makeSound().
Podemos invocarlo de la siguiente manera: */
goat.makeSound();//imprime 'baaa'

/*Todo bien, tenemos un objeto goat que puede imprimir baaa en la consola.
Todo parece funcional correctamente. ¿Qué pasarí­a si quisiéramos añadir
un nuevo método a nuesto objeto goat llamado .diet() que imprima
la propiedad dietType de goat? */

const goat1 = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    //diet() {
      //console.log(dietType);//no tenemos acceso automático a
                           //otras propiedades del objeto goat1
    //}
  };
  //goat1.diet(); 
  // Output will be "ReferenceError: dietType is not defined"

  /**Es extraño, ¿por qué dietType no está definido aunque sea una 
   * propiedad de goat1?
   * 
   * Esto se debe a que, dentro del alcance del método .diet(), no tenemos
   * acceso atomático a otras propiedades del objeto goat1.
   * 
   * Aquí­ es donde la palabra clave this viene al rescate. 
   * Si cambiamos el método .diet() y utilizamos la palabra clave this
   * .diet() puede acceder a otras propiedades del objeto goat1.
   */
  const goat2 = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);//this hace referencia al
                                 //objeto que hace la llamada.
    }
  };
  
  goat2.diet(); 
  // Output: herbivore
  
  /*La palabra clave this hace referencia al objeto que realiza la llamada,
  lo que proporciona acceso a sus propiedades.  En el ejemplo anterior,
  la llamada al objeto es goat y utilizando this tenemos acceso al objeto
  mismo, y entonces la propiedad dietType será accesible usando la
  notación de punto. */

  /**Ejemplo:
   * Crearemos un nuevo objeto para utilizar la palabra clave this.
   * en el siguiente código hay un objeto robot, agregaremos una 
   * propiedad de modelo y le asignaemos el valor de 'B-4MI'..
   * Agrega otra propiedad, energyLevel  asignale el valor 100.
   * 
   * const robot = {
   * 
     };


     Dentro del objeto robot, agregué un método llamado provideInfo. 
     Dentro del cuerpo de provideInfo(), devuelva la siguiente cadena 
     mediante interpolación:

     I am MODEL and my current energy level is ENERGYLEVEL.  

     Reemplace 'MODEL' y 'ENERGYLEVEL' con la propiedad modely el objeto 
     que realiza la llamada energyLevel. Recuerde que, para acceder a las 
     propiedades del objeto que realiza la llamada dentro de un método, 
     debe usar la palabra clave this.


     Ahora, para comprobar .provideInfo() si tiene acceso a las propiedades
    internas de robot. Registre el resultado de la llamada .provideInfo() 
    al método  robot en la consola.*/

     const robot = {
        model: 'B-4MI',
        energyLevel: 100,
        provideInfo() {
          return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
        }
      };
      
      console.log(robot.provideInfo());

      /**En el código anterior, utilizamos this para acceder a las 
       * propiedades del objeto robot dentro del método provideInfo().
       * 
       * Cuando se llama a robot.provideInfo(), this en el método
       * proporciona acceso a las propiedades del objeto robot.
       * 
       * La palabra clave this refiere al objeto que realiza la llamada.
       * En este caso, el objeto robot es quien realiza la llamada a
       * provideInfo().
       * 
       * this en el método proporciona acceso a las propiedades del objeto
       * robot, permitiendo que el método devuelva información sobre el
       * objeto robot.
       * 
       * Cuando se llama a robot.provideInfo(), this se refiere al objeto
       * robot y proporciona acceso a sus propiedades.
       * 
       * En el método provideInfo(), this se refiere al objeto robot.
       * this.model se refiere a la propiedad model del objeto robot.
       * this.energyLevel se refiere a la propiedad energyLevel del objeto
       * robot.
       * 
       * En el método provideInfo(), this se refiere al objeto robot.
       * this.model se refiere a la propiedad model del objeto robot.
       * this.energyLevel se refiere a la propiedad energyLevel del objeto
       * robot.
       * 
       * En el método provideInfo(), this se refiere al objeto robot.
       * this.model se refiere a la propiedad model del objeto robot.
       * this.energyLevel se refiere a la propiedad energyLevel del objeto
       * robot
       * */

      /*Para ver todas las propiedades del objeto
      global console.dir(window)
      
      El resultado será un objeto enorme que contiene:

Todas las propiedades y métodos globales de JavaScript 
(como setTimeout, console, JSON).

El DOM completo (como document, location, history).

Variables globales que hayas definido (si las hay).

Objetos especí­ficos del navegador (como localStorage, 
navigator).

{
  // Propiedades del navegador
  document: Document, // El DOM
  location: Location, // URL actual
  navigator: Navigator, // Información del navegador
  localStorage: Storage, // Almacenamiento local

  // Funciones globales de JS
  setTimeout: function() {},
  setInterval: function() {},
  alert: function() {},

  // Objetos globales
  Math: Math,
  JSON: JSON,

  // Tus variables globales (si las hay)
  miVariable: "Hola", // Si definiste: var miVariable = "Hola";

  // ... (cientos de propiedades más)
}*/