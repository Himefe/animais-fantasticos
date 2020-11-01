export default class Modal {
  constructor(container, abrir, fechar) {
    this.modalContainer = document.querySelector(container);
    this.modalAbrir = document.querySelector(abrir);
    this.modalFechar = document.querySelector(fechar);

    this.foraModal = this.foraModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.modalContainer.classList.toggle('ativo');
  }

  foraModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }

  addEventModal() {
    this.modalAbrir.addEventListener('click', this.toggleModal);
    this.modalFechar.addEventListener('click', this.toggleModal);
    this.modalContainer.addEventListener('click', this.foraModal);
  }

  init() {
    if (this.modalContainer && this.modalAbrir && this.modalFechar) {
      this.addEventModal();
    }
    return this;
  }
}
