/*           CORRECTOR GRAMATICAL        

En este proyecto, utilizarás lo que sabes sobre 
la iteración sobre matrices para recopilar 
información y mejorar la calidad de un párrafo.

INSTRUCCIONES:
PASO 1
En el código que se te proporciona, la variable story
contiene un párrafo que editaremos.
Para editar la historia, la convertimos en un array
en la la línea 3.
El método .split() separa la cadena story con el caracter
de espacio(' ') y almacena cadapalabra como un
elemento de la matriz.

Para ver la matriz con la que trabajaremos a lo
largo de la lección, registre en consola storyWords.
Después de ver la matriz storyWords, comenta el
console.log() para que no se ejecute.

PASO 2:
Para una mejor comparación visual de las historias originales y editadas, 
queremos visualizar el array storyWords editado como una cadena. 
Para convertir el array storyWords de nuevo en una cadena legible, 
podemos invocar el método .join() en storyWords.

Proporcione al método .join() un argumento de un carácter de espacio vacío 
(' ') para separar cada elemento de la matriz con un espacio en la cadena.
 
Coloque la invocación .join() del método como argumento de una 
declaración console.log() para registrar la historia final en la consola.

PASO 3: Contar las palabras.
Ahora es momento de empezar a editar la historia manipulando la 
matriz storyWords. Queremos ver los cambios, así que asegúrate de que 
el console.log() de la historia unida sea la última línea de código en
tu editor. Primero, encima de la declaración console.log() que utiliza
el método .join(), crea una variable llamada count que almacene el número 0.

Justo debajo count, use un método .forEach() para iterar sobre el 
array storyWords. Como argumento del método forEach(), cree una función 
vacía que se usará como función de devolución de llamada.

Si bien se recomienda la sintaxis de flecha ES6 para la función de
devolución de llamada (callback), siéntete libre de usar cualquier 
sintaxis con la que te sientas cómodo.



PASO 4:
Para cada palabra de la matriz storyWords, queremos que la variable 
count se incremente en uno.

Añade un parámetro llamado word a la función de devolución de llamada 
del método .forEach() que se usará para almacenar el elemento actual al 
iterar sobre el array storyWords. En cada iteración storyWord se incrementa 
count en uno.

A continuación del método .forEach(), registre (console.log()) count para 
ver cuántas palabras hay en la historia.


PASO 5:
Un recuento de 183 palabras es demasiado para esta historia. 
Filtraremos todas las apariciones de la palabra "literalmente" 
para acortar la historia y eliminar la palabra innecesaria. 
Reasignaremos la historia filtrada a la misma variable storyWords aplicando 
el método .filter(). A lo largo del proyecto, usaremos este enfoque de 
reasignar la variable storyWords en cada revisión de la historia.

Debajo de donde registraste la variable count, reasigna la 
variable storyWords para que sea igual a la invocación del método .filter() 
en el array storyWords. Asigna al método .filter() una función de 
devolución de llamada con un parámetro de word.

PASO 6:
Debajo de la declaración storyWords de la variable, observe la variable 
unnecessaryWord en la línea 4. Queremos filtrar el valor de unnecessaryWord
de la historia.

Dentro del cuerpo filter() de la función de devolución de llamada del método,
retorna solo si word NO es igual a .unnecessaryWord.

Revisa la cadena story en la consola para asegurarte de que no incluya la 
palabra "literalmente". La primera vez que se usó "literalmente" 
estaba en la primera oración.


PASO 7:
Ahora que eliminamos las palabras innecesarias, corrijamos las palabras
mal escritas de la historia. Podemos reasignarlas a storyWords una nueva
matriz de palabras con corrección ortográfica usando este método .map().

Reasignar storyWords para igualar la invocación del método .map() en la 
matriz storyWords.

Establecer word como parámetro de la función de devolución de llamada de .map().

En el cuerpo de la devolución de llamada, defina una sentencia condicional 
para comprobar si el argumento word es igual a la variable misspelledWord. 
Si lo es, devuelva la ortografía correcta de la cadena: "beautiful". 
Si no, devuelva word.

¡Revisa la cadena story en la consola para ver la ortografía correcta! 
Puedes ver una instancia de la palabra corregida en la primera oración de la historia.


PASO 8:
Tu sobrinito va a leer el cuento y hay una palabra "mala" en él. 
Apliquemos el método .findIndex() para en storyWords encontrar el índice
de la palabra mala.

Comience declarando una variable llamada badWordIndex y configurándola
para la invocación de .findIndex()en la matriz storyWords.

La función .findIndex() de devolución de llamada debe verificar cada 
wordpara ver si es igual a la badWordvariable declarada en la línea 6 y 
devolver el índice de la palabra encontrada.

Luego, registre badWordIndex en la consola.

PASO 9:
Ahora que tenemos el índice de la mala palabra, podemos reemplazarla 
fácilmente con algo más apropiado.

Acceda al elemento dentro del array storyWords que tiene el índice de 
badWordIndex usando la notación de corchetes. Establezca el elemento 
accedido igual a la cadena más apropiada, 'really'.

Guarde el código y verifique que la palabra incorrecta haya sido reemplazada.

PASO 10:
Finalmente, simplifiquemos las palabras de la historia para que sean más 
accesibles. Podemos asegurarnos de que cada palabra tenga 10 caracteres o 
menos usando el método .every() . Este método .every() utiliza una función 
de devolución de llamada para comprobar si todos los elementos de un array 
cumplen una condición especificada. Devuelve true si todos los elementos 
cumplen la condición y false si hay algún elemento que no la cumple.

Para comenzar, define una variable llamada lengthChecky asígnale la 
invocación del método .every() en storyWords. En la función de devolución 
de llamada, comprueba si every word tiene menos de 10 caracteres.

Registre  lengthCheck en la consola para ver el resultado. Si true se 
registra, cada palabra de la historia tiene 10 caracteres o menos. 
De lo contrario, una o más palabras tienen más de 10 caracteres.

PASO 11:
Parece que hay al menos una palabra con más de 10 caracteres.

Utilice un método iterador de su elección para acceder a la palabra(s) 
en el storyWordsarray que tenga más de 10 caracteres. 
Luego, reemplace manualmente la palabra en la cadena story original por una 
más corta.
*/



let story = 'Last weekend, I took literally the most beautifull hike of \
my life. The trail is called "The High Peak Loop" and \
it stretches all the way from Lake Placid to Mount Marcy, \
New York. Itâ€™s really an adventure from beginning to end! \
It is a 15-mile trek, and it literally took me an entire day. \
I stopped at Mirror Lake to take some artsy photos. \
It was a short stop, though,\
because I had a freaking steep climb ahead. \
After a quick break at the scenic Adirondack Lodge,\
I began my ascent up the rocky path. \
The summit is a breathtaking 5,344 feet high! \
I was already exhausted by the time I reached the h\
alfway point. \
Two hours later, I arrived at Indian Falls, \
an extremely beautifull cascade hidden in the forest.\
Something that surprised me was that near the end,\
 you literally loop back to the starting point! \
 At this stage, youâ€™re very close to finishing.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';