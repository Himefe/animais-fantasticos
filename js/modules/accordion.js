import initAnimaNumeros from "./anima-numeros";

export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggler(item) {
    item.nextElementSibling.classList.toggle(this.activeClass);
    item.classList.toggle(this.activeClass);
  }
  // Adiciona evento ao accordion

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggler(item));
    });
  }
  // Iniciar Função

  init() {
    if (this.accordionList.length) {
      this.toggler(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
