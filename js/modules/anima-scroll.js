export default function initAnimaScroll() {
    const sections = document.querySelectorAll('[data-anima="scroll"]');
    function animaScroll(){
        sections.forEach((section) =>{
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = (sectionTop - (window.innerHeight * 0.6)) < 0;
            if (sectionVisible) {
                section.classList.add('ativo');
            }
        });
    }
    animaScroll();
    
    window.addEventListener('scroll', animaScroll); 
}

