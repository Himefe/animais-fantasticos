export default class Funcionamento {
  constructor(target) {
    this.target = document.querySelector(target);
  }

  // Pega o dia/hora de funcionamento da "loja"

  getFuncionamento() {
    this.diasSemana = this.target.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.target.dataset.horario.split(",").map(Number);
  }

  // Pega o horário atual 

  getActualDate() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAtual = this.dataAgora.getUTCHours() - 3;
  }

  // Função que vê se o horário bate com o funcionamento da "loja"

  isOpened() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAtual >= this.horarioSemana[0]
      && this.horarioAtual < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  // Inicia a função isOpened, colocando a classe de aberto e removendo.

  ativaOpen() {
    if (this.isOpened()) {
      this.target.classList.add('aberto');
    } else {
      this.target.classList.remove('aberto');
    }
  }

  // Inicia a função por inteira.

  init() {
    if (this.target) {
      this.getFuncionamento();
      this.getActualDate();
      this.ativaOpen();
    }
    return this;
  }
}
