let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset');
let messageElement = document.querySelector('#message');
let newGameButton = document.querySelector('#new');
let currentPlayer = 'X';

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (currentPlayer === 'X') {
            box.textContent = 'X';
            currentPlayer = 'O';
        }else
             {
            box.textContent = 'O';
            currentPlayer = 'X';
        }
        box.disabled = true;
        checkWinner();

    });
});

const disenableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    });
};

const showwinner = (winner) => {
    messageElement.textContent = `Player ${winner} wins!`;
   messageElement.classList.remove ('hidden');
   messageElement.style.display = 'block';
   disenableBoxes();
};  

const checkWinner = () => {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            boxes[a].textContent &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[a].textContent === boxes[c].textContent
        ) {
            showwinner(boxes[a].textContent);
            return;
        }
    }
};


resetButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.textContent = '';
        box.disabled = false;
    });
    messageElement.classList.add('hidden');
    messageElement.style.display = 'none';
    currentPlayer = 'X';
});


    