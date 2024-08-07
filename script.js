// alert("hola Mundo")

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500) //milisegundos 2.5 segundos
  .typeString('HOLA, soy Anadalay Laureani Longino')
  .pauseFor(300)
  .deleteAll()
  .typeString('Les presento mi portafolio 😉')
  .pauseFor(1000)
  .start();

let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

typewriterFrase
  .pauseFor(2500) //milisegundos 2.5 segundos
  .typeString('"Nunca subestimes el poder de una idea simple para cambiar el mundo."')
  .pauseFor(300)
  .deleteAll()
  .typeString('Reshma Saujani')
  .pauseFor(1000)
  .start();




var audio = document.getElementById("miAudio");
const pauseButton = document.getElementById('pauseButton');
pauseButton.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    pauseButton.innerHTML = '<i class="fas fa-pause"></i> Pausar';
} else {
    audio.pause();
    pauseButton.innerHTML = '<i class="fas fa-play"></i> Reproducir';
}
});


async function copiarAlPortapapeles(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar:', err);
  }
}