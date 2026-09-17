numero = 3;

console.log("El tipo de variable es: " + typeof numero);
console.log("El valor de la variables es: " + numero);

let elementohtml = document.querySelector('body');
elementohtml.textContent = "El tipo de dato variable es: " + typeof numero + " y el número de la variable es: " + numero;

document.body.appendChild(elementohtml);