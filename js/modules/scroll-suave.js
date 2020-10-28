/* eslint-disable no-extra-semi */
export default class ScrollSuave {
  constructor(links, options) {
    this.menuInterno = document.querySelectorAll(links);
    console.log(this.menuInterno);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.menuInterno.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    this.addLinkEvent();
    return this;
  }
};
