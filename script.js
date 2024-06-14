let number1 = Number(prompt("Digite o numero 1"))
let number2= Number(prompt("Digite o numero 2"))

let sum = number1 + number2
let sub = number1 - number2
let plus = number1 * number2
let div = number1 / number2
let rest = number1 % number2
let isPair = sum


alert(`A soma dos numeros é ${sum}`)
alert(`A subtração dos numeros é ${sub}`)
alert('A multiplicação dos numeros é' +plus)
alert('A divisão dos numeros é '+div)
alert(`O resto da divisão é` +rest)

if(number1 == number2) {
  alert("Os numeros são iguais")
}else{
  alert("Os numeros são diferentes")
}

if(isPair % 2 === 0  ) {
  alert("A soma dos numeros é par")
}else{
  alert("A soma dos numeros é impar")
}
