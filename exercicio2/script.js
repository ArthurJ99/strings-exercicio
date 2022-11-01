const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";


// Exercicio 02
// a) e b)
// com os espaços
console.log(minhaString.length)
//sem os espaços
console.log(minhaString.trim().length)

// c)

const novaString = minhaString.replace("________","sticioso")
console.log(minhaString)
console.log(novaString)