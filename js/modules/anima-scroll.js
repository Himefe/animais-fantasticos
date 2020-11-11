export default class AnimaScroll {
  constructor(target) {
    this.target = document.querySelectorAll(target);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância dos itens/sections

  getDistance() {
    this.distance = [...this.target].map(section => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - this.windowMetade,
      };
    });
    console.log(this.distance);
  }

  // Verifica se a distância do item é maior que a do PageYOfsset e adiciona classe ativo

  checkDistance() {
    this.distance.forEach(item => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      }
    });
  }

  // Inicia a função inteira

  init() {
    if (this.target.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
}
