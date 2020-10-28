import outsideClick from './outsideClick.js';
export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach((item) =>{
        ['touchstart', 'click'].forEach((userEvent) =>{
            item.addEventListener(userEvent, handleClick);
        });
    });

    function handleClick(event){
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['click', 'touchstart'], ()=>{
            this.classList.remove('active')
        });
    }
}



