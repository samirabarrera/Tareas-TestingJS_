//EJERCICIO

/*Paso 1
 En robot, crea un método getter llamado energyLevel
con la palabra clave get. Deja el cuerpo de la función
en blanco por ahora */

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,    
  };

/*Paso 2
Dentro del método getter, agregue una instrución if
para comprobar si this._energyLevel es un número, 
utiliza el operador typeof.  Si la condición es ver-
dadera, devuelve 'My current energy level is ENERGYLEVEL'
Reemplace ENERGYLEVEL con el valor this._energyLevel.

Asegurate de devolver la cadena en lugar de registrarla
en la consola.*/

const robot1 = {
    _model: '1E78V2',
    _energyLevel: 100,
    getter () {
        return `My current energy level is ${this._energyLevel}`
    }
}
console.log(typeof this._energyLevel)

/*Paso 3:
Si this._energyLevel no es un número, es posible que la 
propiedad _energyLevel se haya modificado. 
Agreguemos una declaración de retorno predeterminada 
para cuando se presente esta situación.

Añade una declaración else que devuelva 'System malfunction: cannot retrieve energy level'.*/

const robot2 = {
    _model: '1E78V2',
    _energyLevel: 100,
    getter () {
        if (this._energyLevel) {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return 'System malfunction: cannot retrieve energy level';
        }
    }
}
console.log(robot2.getter());

/*Paso 4: 
Registra el resultado de llamar al método getter energyLevel en robot en la consola.

¡Tenga en cuenta que el método devolverá una respuesta 
formateada en lugar de solo acceder a una propiedad!*/

const robot3 = {
    _model: '1E78V2',
    _energyLevel: 100,
    getter () {
        return `My current energy level is ${this._energyLevel}`;
    }
}
console.log(robot3.getter())