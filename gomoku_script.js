const board = document.getElementById('board');

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.row = i;
    cell.dataset.col = j; 
    cell.addEventListener('click', handleClick);
    board.appendChild(cell);
  }
}
 
let currentPlayer = 'X';

function handleClick(event) {
  
  const cell = event.target;
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + ' wins!');
      
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    
  }
}


function checkWin() {
    // Get all cells in the board
    const cells = document.querySelectorAll('#board div');
  
    // Board Generator
    const board = [];
    for (let i = 0; i < 12; i++) {
      board[i] = [];
      for (let j = 0; j < 12; j++) {
        board[i][j] = '';
      }
    }
    
  
    // Populate the board array with the current state of the game
    cells.forEach(cell => {
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      const value = cell.textContent;
      board[row][col] = value;
    });
  
    // Check 5 in a row horizontal
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] && board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2] && board[i][j] === board[i][j+3] && board[i][j] === board[i][j+4]) {
          return true;
        }
      }
    }
  
    // Check 5 in a row vertical
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 12; j++) {
        if (board[i][j] && board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j] && board[i][j] === board[i+3][j] && board[i][j] === board[i+4][j]) {
          return true;
        }
      }
    }
  
    // Check 5 in a row (top-left to bottom-right)
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] && board[i][j] === board[i+1][j+1] && board[i][j] === board[i+2][j+2] && board[i][j] === board[i+3][j+3] && board[i][j] === board[i+4][j+4]) {
          return true;
        }
      }
    }
  
    // Check 5 in a row (bottom-left to top-right)
    for (let i = 4; i < 12; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] && board[i][j] === board[i-1][j+1] && board[i][j] === board[i-2][j+2] && board[i][j] === board[i-3][j+3] && board[i][j] === board[i-4][j+4]) {
            return true;
          }
        }
      }
      
    
      // for draw
      return false;
    }

    var myAudio = document.getElementById("myAudio");
var myBtn = document.getElementById("myBtn");

function togglePlay() {
  if (myAudio.paused) {
    myAudio.play();
    myBtn.innerHTML = "Pause";
  } else {
    myAudio.pause();
    myBtn.innerHTML = "Play";
  }
}

const audio = document.getElementById("myAudio");
audio.play();

  
