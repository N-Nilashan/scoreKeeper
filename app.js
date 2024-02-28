const p1 = {
    score: 0,
    button: document.getElementById("p1Button"),
    display: document.getElementById("p1Display")
}
const p2 = {
    score: 0,
    button: document.getElementById("p2Button"),
    display: document.getElementById("p2Display")
}

const resetGame = document.getElementById("resetGame")
const selectLevel = document.getElementById("selectLevel")
let winningScore = selectLevel.value;
let isGameOver = false

function updateScore(player, opponent) {
    if (isGameOver == false) {

        player.score += 1;
        if (player.score == winningScore) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})

resetGame.addEventListener('click', reset)

selectLevel.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})

function reset() {
    isGameOver = false
    for (let p of [p1, p2]) {
        p.score = 0
        p.display.textContent = p.score
        p.display.classList.remove('has-text-danger', 'has-text-success')
        p.button.disabled = false
    }
}
