const mensagem = document.getElementById('mensagem')
const sim = document.getElementById('sim')
const nao = document.getElementById('nao')
const imagem = document.getElementById('gif-img')
const botoes = document.querySelector('.botoes')

let cliquesNao = 0
let tamanhoSim = 1
let tamanhoNao = 1
const tamanhoMaxSim = 2.5


const mensagensNao = [
    "Are you sure?", 
    "Please don't do this...", 
    "Come on, think again!", 
    "Pleaseeee 🥺", 
    "No 😭"
]

sim.addEventListener('click', function() {
    imagem.src = 'img/togepi-love.gif'
    mensagem.textContent = 'Yay! You made my day! ❤️'
    botoes.style.display = 'none'
})

nao.addEventListener('click', function () {
    imagem.src = 'img/togepi-sad.gif'

    nao.textContent = mensagensNao[cliquesNao % mensagensNao.length]

    cliquesNao++

    if (cliquesNao <= 4) {
        tamanhoNao *= 0.8
        nao.style.transform = `scale(${tamanhoNao})`
    }

    if (tamanhoSim < tamanhoMaxSim) {
        tamanhoSim *= 1.2
        sim.style.transform = `scale(${tamanhoSim})`
    }
 
})
