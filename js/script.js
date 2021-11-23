// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// Ogni volta che clicco su play compare la griglia 
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

        let sizeFactor = Math.sqrt(generatedNumbers.length);

        const thisNumber = generatedNumbers[i];

        // const newGeneratedSquare 
        newGeneratedSquare = generateGridItem(thisNumber, sizeFactor);
        
        // Aggiungo l'elemento alla griglia
        mainGrid.appendChild(newGeneratedSquare);
    }
}


// -----------
// FUNZIONI LEGATE AL DOM
// -----------

// AL CLICK SU OGNI SQUARE
// AGGIUNGO LA CLASSE ACTIVE ALLO SQUARE SU CUI HO CLICCATO
function handleSquareClick() {
    this.classList.add('active');
}

// -----------
// FUNCTIONS
// -----------

// Creare un elemento della griglia
// number -> numero da inserire nello square
// squareSize -> formato dello square
function generateGridItem(number, squareSize) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;
    newSquare.style.width = 'calc(100% /' + squareSize + ')';
    newSquare.style.height = 'calc(100% /' + squareSize + ')';

    // return: Torna l'elemento html creato
    return newSquare;
}

// Genera un array con x numeri in ordine crescente
// quantityOfNumbers -> quanti numeri deve generare
function generateSquaresNumbers (quantityOfNumbers) {

    const numbersArray = [];

    for(let i = 0; i < quantityOfNumbers; i++) {
        const thisNumber = i;
        numbersArray.push(thisNumber);
    }

    // return: array di quantityOfNumbers numeri univoci
    return numbersArray;
}
