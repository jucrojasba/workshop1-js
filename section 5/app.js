//Hola Mundo
/**Taylor Swift es la mejor en la industria pop
 * Mi cancion favorita de ella al momento es Cruel Summer
 * o en general cualquiera del album Lover
 */

const miNumero = 10;
console.log(miNumero);
const miBooleano = true;
console.log(typeof miBooleano);
const miCadena = "Hola Mundo ";
console.log(miCadena.length);
const miArray = ["Hola", 23, ["mundo"]];
console.log(miArray);
const miObjeto = {
  name: "Federico",
  age: 23,
  job: "Engineer",
};
console.log(miObjeto);
const nombreUsuario = prompt("¿Como te llamas?");
alert(`Hola ${nombreUsuario}, bienvenido`);
const gusto = confirm("¿Te gusta JavaScript?");
if (gusto) {
  console.log("Que bueno que te guste JavaScript");
} else {
  console.log("Sentimos que no te guste JavaScript");
}
console.warn("Esto es solo una práctica");
console.error("Esto es un ensayo");
const myArray = [1, 2, 3, 4, 5];
console.table(myArray);
