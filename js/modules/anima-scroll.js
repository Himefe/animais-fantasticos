export default function initAnimaScroll() {
    const sections = document.querySelectorAll('[data-anima="scroll"]');
    function animaScroll(){
        sections.forEach((section) =>{
            const sectionTop = section.getBoundingClientRect().top - window.innerHeight * 0.6;
            if (sectionTop < 0) {
                section.classList.add('ativo');
            }
        });
    }
    sections[0].classList.add('ativo');
    
    window.addEventListener('scroll', animaScroll); 
}

