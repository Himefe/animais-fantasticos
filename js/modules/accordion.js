export default function Iniciar() {
    const dts = document.querySelectorAll('.faq-lista dt');
    dts[0].classList.add('ativo');

    dts[0].nextElementSibling.classList.add('ativo');



    function toggler(){
        this.nextElementSibling.classList.toggle('ativo');
        this.classList.toggle('ativo');
        console.log(this);
    }

    dts.forEach((item) => {
    item.addEventListener('click', toggler);
    });
    
}