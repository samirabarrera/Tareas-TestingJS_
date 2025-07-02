// /* secret-messages.js */
// const buttonElement = document.getElementById('secret-button');
// const pElement = document.getElementById('secret-p');

// const toggleHiddenElement = (domElement) => {
//     if (domElement.style.display === 'none') {//muestra u oculta los elementos según
//       domElement.style.display = 'block';     //El valor de style.display
//     } else {
//       domElement.style.display = 'none';
//     }
// }

// buttonElement.addEventListener('click', () => {//se agrega un detector de eventos para 
//   toggleHiddenElement(pElement);               //escuchar a los eventos 'click'
// });
/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from './dom-functions.js';// ../ indica que la carpeta modules/ se
                                                                            // encuentra en la misma carpeta que la
                                                                            // carpeta principal, secret-messages/
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

