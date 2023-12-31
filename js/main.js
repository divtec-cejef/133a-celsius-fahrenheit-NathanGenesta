/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Nathan Génesta
 * @version 0.2
 * @since   2023-09-05
 */
'use strict'; // Demande un interprétation stricte du code

// Demande la température à l'utilisateur
let temperature = prompt("Température en celcius :");
// Transforme température en entier
temperature = parseInt(temperature);
// Si la température n'est pas un nombre => erreur
if(isNaN(temperature)) {
    alert("Entrer une température !");
} else {
    // Affiche la température en farhenheit
    alert(`${temperature}°C = ${temperature * 9 / 5 + 32}°F`);
}
