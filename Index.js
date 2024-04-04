document.addEventListener('DOMContentLoaded', (event) => {
    let countDownTime = 45;
    let title = document.getElementById('title');
    let timerP = document.getElementById('timerP');
    let score = 0;
    let flippedCards = [];
    let text = document.getElementById("textWinner")

    const timer = setInterval(function(){
        countDownTime--;
        timerP.innerText = countDownTime;
        if (countDownTime === 0){
            clearInterval(timer);
            alert("¡Se acabó el tiempo! \n Tu puntuación fue de: " + score);
            let todasLasCartas = document.querySelectorAll('.card');
            Array.from(todasLasCartas).forEach(card => card.classList.add("removed"));
            text.classList.remove('removed');
            timerP.classList.add('removed');
            title.classList.add('removed');
        }
    }, 1000);

    for (let i = 1; i <= 8; i++) {
        const card = document.getElementById(`card${i}`);
        if (card) {
            card.addEventListener('click', () => {
                if (card.classList.contains('flipped')) {
                    return;
                }

                if (flippedCards.length < 2) {
                    card.classList.toggle('flipped');
                    flippedCards.push(card);
                }
                if (flippedCards.length === 2) {
                    let textoCarta1 = flippedCards[0].querySelector('.back p').textContent;
                    let textoCarta2 = flippedCards[1].querySelector('.back p').textContent;

                    if (textoCarta1 === textoCarta2) {
                        alert('¡Has encontrado un par!');
                        flippedCards.forEach(card => card.classList.add('removed'));
                        score += 100;
                    }
                    setTimeout(() => {
                        flippedCards.forEach(card => card.classList.remove('flipped'));
                        flippedCards = [];
                    }, 1000);

                    let todasLasCartas = document.querySelectorAll('.card');
                    if (Array.from(todasLasCartas).every(card => card.classList.contains('removed'))) {
                        alert("¡Has ganado! \n Tu puntuación fue de: " + score);
                        text.classList.remove('removed');
                        countDownTime = -1;
                        timerP.classList.add('removed');
                        title.classList.add('removed');
                    }
                }
            });
        }
    }
});
