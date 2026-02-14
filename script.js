function abrirCarta() {
  const overlay = document.getElementById("carta");
  const carta = overlay.querySelector(".carta");

  overlay.style.display = "flex";
  carta.classList.remove("cerrando");
}
function cerrarCarta() {
  const overlay = document.getElementById("carta");
  const carta = overlay.querySelector(".carta");

  carta.classList.add("cerrando");

  setTimeout(() => {
    overlay.style.display = "none";
    carta.classList.remove("cerrando");
  }, 500);
}
const fechaInicio = new Date("2025-09-22T00:00:00");
function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").innerText =
    `Hace ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos q m soportas`;
}
setInterval(actualizarContador, 1000);
function abrirRecuerdo() {
  document.getElementById("recuerdo").style.display = "flex";
}
function cerrarRecuerdo() {
  const overlay = document.getElementById("recuerdo");
  const carta = overlay.querySelector(".recuerdo-wrap");

  carta.classList.add("cerrando");

  carta.addEventListener("animationend", function handler() {
    overlay.style.display = "none";
    carta.classList.remove("cerrando");
    carta.removeEventListener("animationend", handler);
  });
}
function iniciarTodo() {
  document.querySelector('.gatitos-wrap').classList.add('visible');

  const inicio = document.getElementById("inicio");
  const musica = document.getElementById("musicaIntro");

  musica.volume = 0.3;
  musica.play();

  inicio.classList.add("oculto");

  setTimeout(() => {
    inicio.style.display = "none";
  }, 1200);
}
