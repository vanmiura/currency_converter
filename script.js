var valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.48

var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)

//Revisão
//variáveis var int - float - string
//alert - parseInt - parseFloat - prompt
//operações + somar * multiplicar
//comentário final