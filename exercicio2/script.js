// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.//

const numero = (numero1, numero2) => {
    const soma = numero1 + numero2 
    console.log(soma)
}

numero(11, 11)

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.//

const letraB = (num1, num2) => {
    const resultado = num1 >= num2
    console.log(resultado)
}
letraB(10, 5)

//c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.//

const letraC = (nume3) =>{
    const par = nume3 % 2 ===0
    console.log(par)
}

letraC(22)


//d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS. //

const salario = (mensal) =>{
    const receber = mensal * 0.1
    console.log(receber)
}
salario(2000)
















