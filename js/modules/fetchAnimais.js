import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
// Cria a div contendo as informações, perante ao animaisapi.json
  function createAnimal(animal) {
    const divAnimal = document.createElement('div');
    divAnimal.classList.add('numeros-animal');
    divAnimal.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return divAnimal;
  }

  // Preenche cada animal no DOM
  function preencherAnimais(animal) {
    const numerosGrid = document.querySelector(target);
    const divCriada = createAnimal(animal);
    numerosGrid.appendChild(divCriada);
  }

  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Pegando animaisapi.json utilizando Fetch
  async function criarAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumero();
    } catch (erro) {
      console.log(erro);
    }
  }

  criarAnimais('../../animaisapi.json');
}
