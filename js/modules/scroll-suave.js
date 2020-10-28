export default function initScrollToSection(){
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
        
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    }
    
    
    const menuInterno = document.querySelectorAll('[data-anima="menu-suave"] a[href^="#"]');
    
    menuInterno.forEach((link) =>{
        link.addEventListener('click', scrollToSection)
    });
}

