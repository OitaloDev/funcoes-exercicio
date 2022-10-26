let numero1 = Number(prompt("Digite o primeiro numero"))
let numero2 = Number(prompt("Digite o segundo numero"))
console.log(numero1, numero2)

//a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).//

const soma = (soma1, soma2) =>{
    return`A soma ${soma1} e ${soma2} = ${soma1 + soma2}`

}
console.log(soma(numero1, numero2))


const subtracao = (subt1, subt2) =>{
    return `A subtração ${subt1} e ${subt2} = ${subt1 - subt2}` 
}
console.log(subtracao(numero1, numero2))



const multiplicacao = (mult1, mult2) =>{
    return `A Multiplicação ${mult1} e ${mult2} ${mult1 * mult2}` 
   
}
console.log(multiplicacao(numero1, numero2))


const divisao = (div1, div2) =>{
    return `A divisão ${div1} e ${div2} ${div1 / div2} `
    
}
console.log(divisao(numero1, numero2))



//b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.//




//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

// o console.log está sendo adicionado no exercicio A

//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.





