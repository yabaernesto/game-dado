var scores, roundScore, activePlayer, gamePlaying

scores = [0, 0]
roundScore = 0
activePlayer = 0

init()

document.querySelector('.btn--roll').addEventListener('click', () => {
    if (gamePlaying) {
        // value random number
        var dice = Math.floor(Math.random() * 6) + 1
        console.log(dice)
        
        // display result img
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block'
        diceDOM.src = './img/dice-' + dice + '.png'

        // number dice
        if (dice !== 1) {
            // add point
            roundScore += dice
            document.querySelector('#current--' + activePlayer).textContent = roundScore
        } else {
            // next player
            nextPlayer()
        }
    }
})

document.querySelector('.btn--hold').addEventListener('click', () => {
    if (gamePlaying) {
        // add current
        scores[activePlayer] += roundScore

        // update UI
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]

        // check player
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name--'+ activePlayer).textContent = 'Venceu!'
            document.querySelector('.dice').style.display = 'none'
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

    document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.btn--new').addEventListener('click', init)

function init() {
    scores = [0, 0]
    activePlayer = 0
    roundScore = 0
    gamePlaying = true

    document.querySelector('.dice').style.display = 'none'

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