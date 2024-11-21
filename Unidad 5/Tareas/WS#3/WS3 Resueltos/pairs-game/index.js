document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const appendTens = document.getElementById("tens");
    const appendSeconds = document.getElementById("seconds");

    let resultsArray = [];
    let counter = 0;
    let seconds = 0, tens = 0, timer;
    const images = ['sass', 'git', 'gulp', 'css', 'grunt'];
    const cards = shuffle(images.concat(images)); // Duplicar y mezclar las cartas

    // Función para mezclar las cartas
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Crear las cartas
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.dataset.item = card;
        cardElement.classList.add('card');
        container.appendChild(cardElement);

        // Evento click para voltear la carta
        cardElement.addEventListener('click', () => {
            if (cardElement.classList.contains('flipped') || cardElement.classList.contains('correct')) {
                return;
            }

            cardElement.classList.add('flipped');
            resultsArray.push(cardElement);

            // Iniciar el temporizador
            if (!timer) {
                timer = setInterval(startTimer, 10);
            }

            // Comprobar coincidencia
            if (resultsArray.length === 2) {
                checkMatch();
            }
        });
    });

    // Función para comprobar coincidencias
    function checkMatch() {
        const [firstCard, secondCard] = resultsArray;
        if (firstCard.dataset.item === secondCard.dataset.item) {
            setTimeout(() => {
                firstCard.classList.replace('flipped', 'correct');
                secondCard.classList.replace('flipped', 'correct');
                counter++;
                checkWin();
            }, 500);
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
            }, 500);
        }
        resultsArray = [];
    }

    // Función para comprobar la victoria
    function checkWin() {
        if (counter === images.length) {
            clearInterval(timer);
            text.textContent = `Your time was ${seconds}:${tens}`;
        }
    }

    // Función para iniciar el temporizador
    function startTimer() {
        tens++;
        if (tens > 99) {
            tens = 0;
            seconds++;
        }
        appendTens.textContent = tens < 10 ? '0' + tens : tens;
        appendSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
});
