export default function activeTab(){
    const faq = document.querySelector('.faq');
    const animais = document.querySelector('.animais');

    faq.innerHTML;

    const menuTab = document.querySelectorAll('[data-tab="menu"] li');
    const menuSection = document.querySelectorAll('[data-tab="content"] section');
    document.documentElement.className = 'js';
    if (menuTab.length  && menuSection.length > 0){
        menuSection[0].classList.add('ativo');
    }
    function activeTab(index){
        menuSection.forEach((section) => {
            section.classList.remove('ativo');
        });
        const direcao = menuSection[index].dataset.anima;
        menuSection[index].classList.add('ativo', direcao);
    }
    
    menuTab.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeTab(index);
        });
    });
}