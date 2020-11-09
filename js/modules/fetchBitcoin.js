export default class FetchBitcoin {
  constructor(url, target) {
    this.url = url;
    this.target = document.querySelector(target);
  }

  async bitcoinNumber() {
    const response = await fetch(this.url);
    const jsonResponse = await response.json();
    this.target.innerText = (1000 / jsonResponse.BRL.buy).toFixed(4);
  }

  init() {
    this.bitcoinNumber();
  }
}
