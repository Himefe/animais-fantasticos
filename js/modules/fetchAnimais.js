import AnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');

    animaisJson.forEach((animal) => {
      const divCriada = createAnimais(animal);
      numerosGrid.appendChild(divCriada);
    });
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  function createAnimais(animal) {
    const divAnimal = document.createElement('div');
    divAnimal.classList.add('numeros-animal');
    divAnimal.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return divAnimal;
  }

  fetchAnimais('../../animaisapi.json');
}

