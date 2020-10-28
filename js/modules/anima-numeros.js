export default function initAnimaNumeros(){

}

const allNumbers = document.querySelectorAll('[data-numero]');

allNumbers.forEach((numero) =>{
    let start = 0;
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    const timer = setInterval(() =>{
        start += incremento;
        numero.innerText = start;
        if(start === total){
            clearInterval(timer);
        }
    }, 25 * Math.random());
});