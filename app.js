const card = document.querySelector('.playing-card')

const squares = document.querySelectorAll('.square')

card.addEventListener('dragstart', dragStart)

squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let beingDragged

function dragStart(e) {
    beingDragged = e.target
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    e.target.append(beingDragged)
}

