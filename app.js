const card = document.querySelector('.playing-card')
const squares = document.querySelectorAll('.square')
const infoDisplay = document.querySelector('#info')

card.addEventListener('drag', dragging)
card.addEventListener('dragstart', dragStart)

squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragend', dragEnd)
})

let beingDragged

function dragging(e) {
    infoDisplay.textContent = 'You are dragging ' + beingDragged.id
}

function dragStart(e) {
    beingDragged = e.target
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.target.classList.add('highlight')
}

function dragLeave(e) {
    e.target.classList.remove('highlight')
}

function dragDrop(e) {
    e.target.append(beingDragged)
    e.target.classList.remove('target')
}

function dragEnd(e) {
    e.target.classList.add('target')
    setTimeout(() => e.target.classList.remove('target'), 100)
    infoDisplay.textContent = ''
}
