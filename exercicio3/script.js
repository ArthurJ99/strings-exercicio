//Crie a const para a frase aqui
//Exercicio 03

// a)
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\" "
console.log(frase)
// b)
const novaFrase = frase.replace("verde","rosa").replace("azul","laranja")
console.log(novaFrase)
// c)
console.log(novaFrase.includes("verde"))
console.log(novaFrase.includes("laranja"))

// Extra

console.log(novaFrase.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR"))
