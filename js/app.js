import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/activetab.js';
import initModal from './modules/modal.js';
import initIrTopPage from './modules/backtop.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initAnimaNumeros from './modules/anima-numeros.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetch from './modules/fetchBitcoin.js';
import initAnimaScroll from './modules/anima-scroll.js';

const scrollSuave = new ScrollSuave('[data-anima="menu-suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anima="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initModal();
initIrTopPage();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
initFetch();
initAnimaScroll();
