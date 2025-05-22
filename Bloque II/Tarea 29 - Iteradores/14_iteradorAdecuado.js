/*      ELIJA EL ITERADOR ADECUADO       

Hay muchos métodos de iteración en JavaScript que puedes
elegir.  Además de aprender la sintaxis correcta para usar
los métodos de iteración, también es importante aprender
a elegir el método correcto para diferentes escenarios.
Los ejercicios a continuación te darán la oportunidad
de hacerlo.


INSTRUCCIONES:

PASO 1:
Reemplace la palabra method en la primera llamada al
método con un método que hará algo con cada uno de los
valores en la matriz y devolverá undefined.

PASO 2:
En la segunda llamada al método, reemplace la palabra
method con un método que devolverá una matriz solo con
aquellos elementos más largos que 7 caracteres.

PASO 3:
En la tercera llamada al método, reemplace la palabra
method con un método que acepte una matriz que contenga
múltiples valores y devuelve un solo valor.

PASO 4:
En la cuarta llamada al método, reemplace la palabra method
con un método que devolverá una nueva matriz de números
devuletos por la función.

PASO 5:
En la quinta llamada al método, reemplace la palabra
method con un método que devolverá un valor booleano.*/

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.method(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.method(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.method((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.method(num => num - 5);

// Choose a method that will return a boolean value
nums.method(num => num < 0);