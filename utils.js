const somar = ((num1, num2) => num1 + num2)
const subtrair = ((num1, num2) => num1 - num2)
const multiplicar = ((num1, num2) => num1 * num2)
const dividir = ((num1, num2) => {
    if (num2 === 0){
        return 'Divisão inválida (por 0)'
    }
    return num1 / num2
})

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}