export default class AnimaNumeros {
  constructor(numeros, observeTarget, classObserver) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observeTarget);
    this.classObserver = classObserver;
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Incrementa os numeros ao data-numero
  static incrementarNumero(numero) {
    let start = 0;
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start === total) {
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Inicia o incrementarNumero, para que o numero seja incrementado

  animaNumeros() {
    this.numeros.forEach((numeroItem) => this.constructor.incrementarNumero(numeroItem));
  }

  // Observador de mutação para execução do número do animaNumeros quando a div .numeros tiver ativo

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.classObserver)) {
      this.animaNumeros();
      this.observer.disconnect();
    }
  }

  // Inicia o handleMutation

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  // Inicia o código inteiro;
  init() {
    this.addMutationObserver();
  }
}
