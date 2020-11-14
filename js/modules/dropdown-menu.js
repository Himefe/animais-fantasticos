import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdowns, events) {
    this.dropdowns = document.querySelectorAll(dropdowns);
    this.handleClick = this.handleClick.bind(this);
    this.activeClass = "active";
    this;
    // eslint-disable-next-line no-unused-expressions
    events === undefined
      ? (this.events = ["touchstart", "click"])
      : (this.events = events);
  }

  // Função callback, ela adiciona a classe e remove

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Inicia a função chamando a função callback Handleclick

  addDropdownEvent() {
    this.dropdowns.forEach(item => {
      this.events.forEach(userEvent => {
        item.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  // Inicia a função inteira
  init() {
    if (this.dropdowns.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}
