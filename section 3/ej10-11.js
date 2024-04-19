const nombreUsuario = prompt("¿Como te llamas?");
alert(`Hola ${nombreUsuario}, bienvenido`);
const gusto = confirm("¿Te gusta JavaScript?");
if (gusto) {
  console.log("Que bueno que te guste JavaScript");
} else {
  console.log("Sentimos que no te guste JavaScript");
}
