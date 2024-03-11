document.addEventListener('DOMContentLoaded', (event) => {
    for (let i = 1; i <= 8; i++) {
        const card = document.getElementById(`card${i}`);
        if (card) {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        }
    }
});
