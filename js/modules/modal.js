export default function initModal(){
    const modalContainer = document.querySelector('[data-modal="container"]');
    const modalAbrir = document.querySelector('[data-modal="abrir"]');
    const modalFechar = document.querySelector('[data-modal="fechar"]');


    if(modalContainer && modalAbrir && modalFechar){
        function toggleModal(event){
            event.preventDefault();
            modalContainer.classList.toggle('ativo');
        }
        
        
        function foraModal(event){
            if(event.target === this){
                toggleModal(event);
            }
            
        
        }
        
        modalAbrir.addEventListener('click', toggleModal);
        modalFechar.addEventListener('click', toggleModal);
        modalContainer.addEventListener('click', foraModal);
    }
}

