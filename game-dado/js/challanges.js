var scores, roundScore, activePlayer, gamePlaying, lastDice

scores = [0, 0]
roundScore = 0
activePlayer = 0

init()

document.querySelector('.btn--roll').addEventListener('click', () => {
    if (gamePlaying) {
        // value random number
        var dice1 = Math.floor(Math.random() * 6) + 1
        var dice2 = Math.floor(Math.random() * 6) + 1
        
        // display result img
        document.getElementById('dice-1').style.display = 'block'
        document.getElementById('dice-2').style.display = 'block'
        document.getElementById('dice-1').src = './img/dice-' + dice1 + '.png'
        document.getElementById('dice-2').src = './img/dice-' + dice2 + '.png'

        // number dice
        if (dice1 !== 1 && dice2 !== 1) {
            // add point
            roundScore += dice1 + dice2
            document.querySelector('#current--' + activePlayer).textContent = roundScore
        } else {
            // next player
            nextPlayer()
        }
        /*if (dice === 6 && lastDice === 6) {
            // player score
            scores[activePlayer] = 0
            document.querySelector('#score--' + activePlayer).textContent = '0'
            nextPlayer()
        } else if (dice !== 1) {
            // add point
            roundScore += dice
            document.querySelector('#current--' + activePlayer).textContent = roundScore
        } else {
            // next player
            nextPlayer()
        }

       lastDice = dice*/
    }
})

document.querySelector('.btn--hold').addEventListener('click', () => {
    if (gamePlaying) {
        // add current
        scores[activePlayer] += roundScore

        // update UI
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]

        var input = document.querySelector('.final-score').value
        var winningScore

        if (input) {
            winningScore = input
        } else {
            winningScore = 100
        }

        // check player
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name--'+ activePlayer).textContent = 'Venceu!'
            document.getElementById('dice-1').style.display = 'none'
            document.getElementById('dice-2').style.display = 'none'
            document.querySelector('.player--'+ activePlayer).classList.add('player--winner')
            document.querySelector('.player--'+ activePlayer).classList.remove('active')
            gamePlaying = false
        } else {
            // next player
            nextPlayer()
        }
    }
})

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current--0').textContent = '0'
    document.getElementById('current--1').textContent = '0'

    document.querySelector('.player--0').classList.toggle('active')
    document.querySelector('.player--1').classList.toggle('active')

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'
}

document.querySelector('.btn--new').addEventListener('click', init)

function init() {
    scores = [0, 0]
    activePlayer = 0
    roundScore = 0
    gamePlaying = true

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'

    document.getElementById('score--0').textContent = '0'
    document.getElementById('score--1').textContent = '0'
    document.getElementById('current--0').textContent = '0'
    document.getElementById('current--1').textContent = '0'
    document.getElementById('name--0').textContent = 'Jogador 1'
    document.getElementById('name--1').textContent = 'Jogador 2'
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    
    document.querySelector('.player--1').classList.remove('active')
    document.querySelector('.player--0').classList.add('active')
}