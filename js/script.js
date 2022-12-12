console.log('JS OK');

// 1 - Prendere gli elementi dal DOM
// 2 - Generare un numero random da 1 a 6 sia per il giocatore che per il computer
// 3 - Calcolare il punteggio piu' alto e stabilire il vincitore
// 4 - Stampare in pagina i due tiri e il risultato


// 1 - Prendere gli elementi dal DOM

const numberResult = document.getElementById('number-result');
const gamePlayer = document.getElementById('player-number');
const gameCpu = document.getElementById('cpu-number');

const messageWins = 'Il vincitore è:';


// 2 -  Generiamo un numero random da 1 a 6 sia per il giocatore che per il computer

const playerNumber = Math.floor(Math.random() * 6) + 1;
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(playerNumber, cpuNumber);


// 3 - Calcoliamo il punteggio più alto

let result = '';

if (playerNumber > cpuNumber) {
    result = 'Player';
} else if (cpuNumber > playerNumber) {
    result = 'CPU';
} else if (playerNumber === cpuNumber) {
    result = 'nessuno dei due, pareggio';
}

console.log (result);

// 4 - Stampare in pagina i due tiri e il risultato

gamePlayer.innerText = `Player : ${playerNumber}`;
gameCpu.innerText = `CPU : ${cpuNumber}`;
numberResult.innerText = `${messageWins} ${result}`;


