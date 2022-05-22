const divPontuacao = document.querySelector("div.pontuacao")
const divStart = document.querySelector("div.start")
const divMain = document.querySelector("main")
const divs = Array.from(divMain.querySelectorAll("div"))

var sequencia = []
let animatingColors = false
let currentColorPosition = 0

divStart.addEventListener("click", ev => {
    inicio()
    return
})

divMain.addEventListener("click", ev => {
    if (animatingColors) {
        console.log("espere a animação terminar")
        return
    }
    const idxClickedElement = divs.indexOf(ev.target)
    if (idxClickedElement !== sequencia[currentColorPosition]) {
        swal({
            icon: 'error',
            title: "Você perdeu!",
            text: "Deseja começar de novo?"
        })
        return
    }
    currentColorPosition++
    ev.target.classList.add("animate")
    
    if(currentColorPosition >= sequencia.length){
        currentColorPosition = 0
        setTimeout(() => turno(), 1000 * 1.5)
    }
})

divs.forEach(div => {
    div.addEventListener("animationend", () => {
        div.classList.remove("animate")
    })
})

function playAnimationColors() {
    sequencia.forEach((current, index) => {
        setTimeout(() => {
            divs[current].classList.add("animate");
            animatingColors = index < sequencia.length - 1
        }, 1000 * index);
    })
}

function inicio() {
    let cnt = 3
    sequencia = []
    currentColorPosition = 0
    let idx = setInterval(() => {
        start.innerHTML = cnt--
        if(cnt <= 0) {
            turno()
            clearInterval(idx)
        }
    }, 1000)
}

function turno() {
    divPontuacao.innerHTML = sequencia.length
    start.innerHTML = 'Reiniciar'
    const rnd = Math.round(Math.random() * 3)
    sequencia.push(rnd)
    playAnimationColors()
}

//divs[0].addEventListener("animationend", ev => divs[0].classList.remove("animating"))