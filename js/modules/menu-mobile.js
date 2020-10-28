import outsideClick from './outsideClick.js';
export default function initMenuMobile(){

}

const menuList = document.querySelector('[data-menu="list"]');
const menuButton = document.querySelector('[data-menu="button"]');
const eventos = ['click', 'touchstart'];



function insertAtivoMenu(){
    menuList.classList.add('ativo');
    menuButton.classList.add('ativo')
    outsideClick(menuList, eventos, () =>{
        menuList.classList.remove('ativo');
        menuButton.classList.remove('ativo');
    });   
}; 

eventos.forEach(evento => menuButton.addEventListener(evento, insertAtivoMenu));