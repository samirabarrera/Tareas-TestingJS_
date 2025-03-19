/*1. Utilice la propiedad .length para encontrar el ultimo elemento de una matriz.
2. Tome todos los elementos de una matriz y cree una cadena
3. Encuentra el valor de retorno de una llama.push() a una matriz.
4. Anidar una matriz dentro de una matriz
5. Acceder a un elemento de la matriz anidada*/

//Utilizando la propiedad .lenght
const array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log('"Lenght de Array" : ${array.lenght}');

//Creando una cadena
const cadena = array.join('-');
console.log(cadena); 

//Encontrando el varlor con llama.push
const nuevoValor = matriz.push(101); 
console.log(nuevoValor);
console.log(array); 

//Anidando una matriz dentro de otra
const subArray = [
  [1, 2, 3]
  [4, 5, 6]
]

//Acceder a un elemento de la matriz anidada
subArray = [0][2];
console.log (subArray);