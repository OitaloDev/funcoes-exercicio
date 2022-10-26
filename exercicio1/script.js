const imprimirNome = (nome) => {
    return `Olá ${nome}`
}

const meuNome = "Italo"

console.log(imprimirNome(meuNome))


//b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.//

//Arrow function
/* const numero = (num) => {
    console.log(num * 1)
    console.log(num * 2)
    console.log(num * 3)
    console.log(num * 4)
    console.log(num * 5)
    console.log(num * 6)
    console.log(num * 7)
    console.log(num * 8)
    console.log(num * 9)
    console.log(num * 10)
}

numero (Number (prompt("Escolha um valor para visualizar a tabuada."))) */
//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ //
let numero1 = Number(prompt("Digite o primeiro numero"))
function numero (numero1){
    console.log(`${numero1} x 1 = ${numero1 * 1}`)
    console.log(`${numero1} x 2 = ${numero1 * 2}`)
    console.log(`${numero1} x 3 = ${numero1 * 3}`)
    console.log(`${numero1} x 4 = ${numero1 * 4}`)
    console.log(`${numero1} x 5 = ${numero1 * 5}`)
    console.log(`${numero1} x 6 = ${numero1 * 6}`)
    console.log(`${numero1} x 7 = ${numero1 * 7}`)
    console.log(`${numero1} x 8 = ${numero1 * 8}`)
    console.log(`${numero1} x 9 = ${numero1 * 9}`)
    console.log(`${numero1} x 10 = ${numero1 * 10}`)
    

}

console.log(numero(numero1))