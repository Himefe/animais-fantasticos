import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/activetab.js";
import Modal from "./modules/modal.js";
import initIrTopPage from "./modules/backtop.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import FetchBitcoin from "./modules/fetchBitcoin.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import AnimaScroll from "./modules/anima-scroll.js";

const scrollSuave = new ScrollSuave('[data-anima="menu-suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anima="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="container"]',
  '[data-modal="abrir"]',
  '[data-modal="fechar"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initIrTopPage();
const dropDownMenu = new DropdownMenu("[data-dropdown]");
dropDownMenu.init();

initMenuMobile();
initFuncionamento();

const fetchBitcoin = new FetchBitcoin(
  "https://blockchain.info/ticker",
  ".bitcoin"
);
fetchBitcoin.init();

const animaScroll = new AnimaScroll('[data-anima="scroll"]');
animaScroll.init();

fetchAnimais("animaisapi.json", ".numeros-grid");
