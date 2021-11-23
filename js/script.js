// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// Ogni volta che clicco su un quadrato questo si colora di 
// verde se il numero contenuto e pari e in rosso se dispari.
document.getElementById('play').addEventListener('click', startGame);

function startGame() {
    // CREARE LA GRIGLIA CON GLI SQUARE
    // Crearmi un array di numeri in ordine crescente da 1 a 100 / da 1 a 81 / da 1 a 49
    const difficultLevel = document.getElementById('difficult').getElementsByTagName('option').textContent;
    
    let numberOfSquares;

    if (difficultLevel === 'Easy') {
        numberOfSquares = 100;
    } else if (difficultLevel === 'Hard') {
        numberOfSquares = 81;
    } else if (difficultLevel === 'Crazy') {
        numberOfSquares = 49;
    }
    
    let generatedNumbers = generateSquaresNumbers(numberOfSquares);

    // Per ogni numero nell'array, creo una cella e la appendo al grid container
    const mainGrid = document.getElementById('grid');
    mainGrid.innerHTML = '';
    for(let i = 0; i < generatedNumbers.length; i++) {

        let cellDimension = Math.sqrt(generatedNumbers.length);

        const thisNumber = generatedNumbers[i];

        const newGeneratedSquare = generateGridItem(thisNumber, cellDimension);

        // // Attacco l'evento allo square
        // newGeneratedSquare.addEventListener('click', handleSquareClick);
        
        // Aggiungo l'elemento alla griglia
        mainGrid.appendChild(newGeneratedSquare);
    }
}

// AL CLICK SU OGNI SQUARE
// AGGIUNGO LA CLASSE ACTIVE ALLO SQUARE SU CUI HO CLICCATO E LA CLASSE EVEN O ODD IN BASE SE IL CONTENUTO 
// E' PARI O DISPARI
// -----------
// FUNZIONI LEGATE AL DOM
// -----------
function handleSquareClick() {
    this.classList.add('active');
}

// -----------
// FUNCTIONS
// -----------

// Creare un elemento della griglia
// number -> numero da inserire nello square
// 
// return: Torna l'elemento html creato
function generateGridItem(number, cellDimension) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;
    newSquare.style.width = 'calc(100% /' + cellDimension + ')';
    newSquare.style.height = 'calc(100% /' + cellDimension + ')';

    return newSquare;
}

// Genera un array con x numeri in ordine crescente
// quantityOfNumbers -> quanti numeri deve generare
// 
// return: array di quantityOfNumbers numeri univoci
function generateSquaresNumbers (quantityOfNumbers) {

    const numbersArray = [];

    for(let i = 0; i < quantityOfNumbers.length; i++) {
        const thisNumber = i;
        numbersArray.push(thisNumber);
    }

    // while(numbersArray.length < quantityOfNumbers) {
    //     // Un numero random
    //     const randomNumber = getRndInteger(1, quantityOfNumbers);

    //     // Se il numero random non è gia presente in numbersArray lo pusho
    //     if( !numbersArray.includes(randomNumber) ) {
    //         numbersArray.push(randomNumber);
    //     }
    // }

    return numbersArray;
}

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }