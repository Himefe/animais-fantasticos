import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/activetab.js';
import Modal from './modules/modal.js';
import initIrTopPage from './modules/backtop.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetch from './modules/fetchBitcoin.js';
import initAnimaScroll from './modules/anima-scroll.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import criarAnimais from './modules/fetchAnimais.js';
import fetchAnimais from './modules/fetchAnimais.js';



const scrollSuave = new ScrollSuave('[data-anima="menu-suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anima="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="container"]', '[data-modal="abrir"]', '[data-modal="fechar"]');
modal.init(); 

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initIrTopPage();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetch();
initAnimaScroll();
fetchAnimais('../animaisapi.json', '.numeros-grid');

