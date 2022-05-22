const mascElements = document.querySelectorAll('[data-mascara]')

/*const fnmasks = {
    matricula: mascaraMatricula
}

mascElements.forEach(el => {
    const mascName = el.dataset.mascara
    const fnmascara = fnmasks[mascName]()
    fnmascara(el)
})*/

/*function mascaraMatricula(el){
    el.addEventListener("keydown", ev => {
        const key = ev.key
        if(key = 'a'){
            
        }
    })
}*/

const actionBar = document.querySelector(".action-bar")
const btadd = actionBar.querySelector(".bt-add")
const container = document.querySelector(".container-data")
const templateModalAluno = container.querySelector("template.aluno")

btadd.addEventListener("click", () => {
    const cloneModal = templateModalAluno.content.cloneNode(true)
    container.appendChild(cloneModal)
})

container.addEventListener("click", ev => {
    const btClose = ev.target.closest(".bt-close")
    const modal = ev.target.closest(".modal")
    
    if (btClose != null) {
        const modal = ev.target.closest(".modal")
        modal.remove()
    }

    const btAction = ev.target.closest(".action")

    if (btAction){
        form = modal.querySelector("form")
        f = new FormData(form)
        f.forEach(value => console.log(value))
    }

})


/*true + true = 2*/

/*let i = 100
while (i--) {
    const cloneModal = templateModalAluno.content.cloneNode(true)
    container.appendChild(cloneModal)
}*/