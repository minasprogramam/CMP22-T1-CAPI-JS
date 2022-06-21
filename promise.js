// console.log('primeiro log')

// console.log('segundo log')

// setTimeout(() => {
//   console.log('terceiro log')
// }, 1000)

// console.log('quarto log')

// function chamarPessoa(nome) {
//   setTimeout(() => {
//     console.log(nome)
//     return nome
//   }, 2000)
// }

const pessoa = chamarPessoa('Gabriela')
console.log(pessoa)

// function imprimir(nome) {
//   console.log("oi " + nome)
// }

// imprimir(pessoa)

// function chamarPessoa(nome) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // if (!nome) {return reject(Error("Você precisa passar um nome"))}
//       // console.log(nome)
//       return resolve(nome)
//     }, 2000)
//   })
// }

// const pessoa = chamarPessoa('Gabriela')
// console.log(pessoa)

// function imprimir(nome) {
//   console.log("oi " + nome)
// }

// imprimir(pessoa)

// chamarPessoa('Gabriela')
// .then((respostaDesejada) => {
//   console.log(respostaDesejada)
//   imprimir(respostaDesejada)
// }).catch((respostaIndesejada) => console.error(respostaIndesejada))


async function resolver() {
  try {
    const respostaDesejada = await chamarPessoa('Gabriela')
    console.log(respostaDesejada)
    imprimir(respostaDesejada)
  }
  catch(err) {
    console.error("ERRO CAPTURADO", err)
  }
}

// resolver()

//try catch

const nome = "Lorena"

try {
  nome = "Celina"
}
catch(err) {
  console.error("ERRO CAPTURADO", err)
}

console.log("o nome é" + nome)


