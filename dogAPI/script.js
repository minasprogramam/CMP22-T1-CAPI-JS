const container = document.getElementById('demo')

async function getDoguinho(breed) {
  try {
    const resposta = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    // console.log(resposta)
    const dados = await resposta.json()
    // console.log(dados)
    const doguinhoImagem = document.createElement('img')
    doguinhoImagem.setAttribute('src', dados.message)
    container.appendChild(doguinhoImagem)
  }
  catch(err) {
    console.error("HTTP Error: ", err)
  }
}

getDoguinho('basenji')
