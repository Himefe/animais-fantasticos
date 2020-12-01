import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuList, menuButton, events) {
    this.menuList = document.querySelector(menuList);
    this.menuButton = document.querySelector(menuButton);
    // eslint-disable-next-line no-unused-expressions
    events === undefined
      ? (this.events = ["touchstart", "click"])
      : (this.events = events);
    this.activeClass = "ativo";

    // Bind do insertMenu para ser chamado no addEventListener como callback
    this.insertAtivoMenu = this.insertAtivoMenu.bind(this);
  }

  // Adiciona a classe ativo ao menuList e menuButton, e remove de acordo com a função outsideClick

  insertAtivoMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  // Inicia a função insertAtivoMenu ao click do menuButton

  addAtivoMenuEvent() {
    this.events.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.insertAtivoMenu);
    });
  }

  // Inicia a função inteira

  init() {
    if (this.menuList && this.menuButton) {
      this.addAtivoMenuEvent();
    }
  }
}
