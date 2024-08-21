const nota_1 = document.querySelector('#nota_1')
const nota_2 = document.querySelector('#nota_2')
const nota_3 = document.querySelector('#nota_3')
const botao = document.querySelector('#botao')
const p1 = 1
const p2 = 2
const p3 = 3

let media = 0


botao.addEventListener('click', () => {
    if(nota_1.value > 0 & nota_1.value < 10 & nota_2.value > 0 & nota_2.value < 10 & nota_3.value > 0 & nota_3.value <10){
        media = ((nota_1.value * p1) + (nota_2.value * p2) + (nota_3.value * p3)) / (p1 + p2 + p3)
    
        console.log(`A média é: ${media.toFixed(2)}`)
    }else{
        console.log('Uma das notas está invalida. Digite suas notas no intervalo de 0 até 10')
    }
})