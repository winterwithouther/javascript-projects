const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[your-data-score]')

const SELECTIONS = [
    {
        name : "rock",
        emoji : "✊",
        beats : "scissors"
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
      },
      {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
      }
]

console.log(selectionButtons)

selectionButtons.forEach(selectionButton => {
    console.log("running")
    selectionButton.addEventListener("click", (e) => {
        console.log("clicked")
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) {
        incrementScore(yourScoreSpan)
    }
    if (computerWinner) {
        incrementScore(computerScoreSpan)
    }
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement("div")
    div.innerText = selection.emoji
    div.classList.add("result-section")
    if (winner) {
        div.classList.add('winner')
    }

    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}