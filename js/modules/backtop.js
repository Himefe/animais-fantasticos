export default function initIrTopPage(){
    const setinhaProTopo = document.querySelector('.irTopo');
    function irTopPage() {
        const menu = document.querySelector('nav');
        const alturaTopo = menu.getBoundingClientRect().top; 
        if (alturaTopo < 0) {
            setinhaProTopo.classList.add('ativo');
        } else {
            setinhaProTopo.classList.remove('ativo');
        }
    }
     window.addEventListener('scroll', irTopPage);
     function clickToTop() {
         const topoHtml = document.querySelector('body');
         const offSetBody = topoHtml.offsetTop;
    
         window.scrollTo({
             top: offSetBody,
             behavior: "smooth",
         });
     }
     setinhaProTopo.addEventListener('click', clickToTop);
}


