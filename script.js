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