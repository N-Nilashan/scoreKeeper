const p1Button = document.getElementById("p1Button")
const p2Button = document.getElementById("p2Button")
const p1Display = document.getElementById("p1Display")
const p2Display = document.getElementById("p2Display")
const resetGame = document.getElementById("resetGame")
const selectLevel = document.getElementById("selectLevel")

let p1Score = 0;
let p2Score = 0;
let winningScore = selectLevel.value;
let isGameOVer = false

p1Button.addEventListener('click', function () {
    if (isGameOVer == false) {

        p1Score += 1;
        if (p1Score == winningScore) {
            isGameOVer = true
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true
            p2Button.disabled = true
        }
        p1Display.textContent = p1Score

    }


})
p2Button.addEventListener('click', function () {
    if (isGameOVer == false) {

        p2Score += 1;
        if (p2Score == winningScore) {
            isGameOVer = true
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1Button.disabled = true
            p2Button.disabled = true
        }
        p2Display.textContent = p2Score
    }

})

resetGame.addEventListener('click', reset)


selectLevel.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})

function reset() {
    isGameOVer = false
    p1Score = 0
    p2Score = 0
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    p2Display.classList.remove('has-text-danger', 'has-text-success')
    p1Display.classList.remove('has-text-danger', 'has-text-success')
    p1Button.disabled = false
    p2Button.disabled = false
}