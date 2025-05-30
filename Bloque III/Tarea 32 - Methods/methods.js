/*                    Methods    

En este punto, tenemos una clase Dog que crea objetos
 con propiedades name y behavior. Debajo, agregaremos
 métodos getters  y un método para dar vida a nuestra 
 clase.
 
 La sintaxis del método de clase y del getter es la misma
 que para los objetos excepto que no se pueden incluir
 comas entre los métodos*/

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

/*En el ejemplo anterior, agregamos métodos getters para
name y behavior.  Observe que también antepusimos los
nombres de las propiedades con guiones bajos (_name y
_behavior), lo que indica que no se debe acceder 
directamente a ellas.  Debajo de los getters, añadimos
un método llamado .incrementBehavior(). Al llamar a
incrementBehavior() en una instanciad Dog, se agrega 1 a
la propiedad _behavior.  Entre cada uno de nuestros
métodos no incluimos comas. */

//Ejercicio:
/*
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
  */

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

/*Ejercicio:
Paso 1:
En el constructor Surgeon, anteponga a las propiedades name
y department un guión bajo (_). 

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
  }
}

Paso 2:
Dentro de constructor(). agregue una propiedad llamada
_remainingVacationsDays y configurela igual a 20.

class Surgeon {
  constructor(name, department, remainingVacationsDays) {
    this._name = name;
    this._department = department;
    this._remainingVacationsDays = 20;
  }
}

Paso 3:
Debajo de constructor(), crea un getter llamado name
que devuelve el valor guardado en _name.

get name() {
    return this._name;
    }

Paso 4:
Debajo del getter name, crea un getter llamado
department que devuelva el valor guardado en
_department.

Paso 5:
Debajo del getter department, crea un getter llamado
remainingVacationDays que devuelva el valor guardado
en _remainingVacationDays.

Paso 6:
Debajo del getter remainingVacationsDays, crea un método
llamado takeVacationDays que acepte un argumento
llamado daysOff.

Dentro del método, resta daysOff del número guardado en
_remainingVacationDays. Establece el resultado
_remainingVacationDays.
*/

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationsDays = 20;
  }

  get name() {
    return this._name;
  }
  
  get deparment() {
    return this._department
  }

  get remainingVacationsDays () {
    return this._remainingVacationsDays
  }

  takeVacationDays (daysOff) {
    this._remainingVacationsDays--
  }
}