export default class TabNav {
  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // ative o tabnav de acordo com o index
  activeTab(index) {
    this.content.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.content[index].dataset.anima;
    this.content[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona evento ao tabnav

  addTabEvent() {
    this.menu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  // Inicia o tabnav
  init() {
    document.documentElement.className = 'js';
    if (this.menu.length && this.content.length > 0) {
      this.activeTab(0);
      this.addTabEvent();
    }
  }
}
