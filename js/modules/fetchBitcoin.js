 export default function initFetch(){

 }
 const spanBit = document.querySelector('.bitcoin');



     function bitcoinNumber(){
         fetch('https://blockchain.info/ticker')
         .then(r => r.json())
         .then(btc => {
             spanBit.innerText = btc.BRL.buy;
         })
     }

 setInterval(bitcoinNumber, 30000)






