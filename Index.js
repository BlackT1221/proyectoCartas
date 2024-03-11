document.addEventListener('DOMContentLoaded', (event) => {
    let flippedCards = [];
    let text = document.getElementById("textWinner")
    for (let i = 1; i <= 8; i++) {
        const card = document.getElementById(`card${i}`);
        if (card) {
            card.addEventListener('click', () => {
                if (flippedCards.length < 2) {
                    card.classList.toggle('flipped');
                    flippedCards.push(card);
                }
                if (flippedCards.length === 2) {
                    // Obtenemos el texto de la cara trasera de las cartas
                    let textoCarta1 = flippedCards[0].querySelector('.back p').textContent;
                    let textoCarta2 = flippedCards[1].querySelector('.back p').textContent;

                    // Comparamos si los textos son iguales
                    if (textoCarta1 === textoCarta2) {
                        alert('¡Has encontrado un par!');
                        flippedCards.forEach(card => card.classList.add('removed'));
                    }
                    setTimeout(() => {
                        flippedCards.forEach(card => card.classList.remove('flipped'));
                        flippedCards = [];
                    }, 1000);

                    // Verificamos si todas las cartas tienen la clase 'removed'
                    let todasLasCartas = document.querySelectorAll('.card');
                    if (Array.from(todasLasCartas).every(card => card.classList.contains('removed'))) {
                        text.classList.remove('removed');
                    }
                }
            });
        }
    }
});
