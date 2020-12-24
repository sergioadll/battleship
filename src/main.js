/* eslint-disable */
import "bootstrap";
import "./style.css";

let gameBoard = [
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

window.onload = function() {
  let row = document.querySelectorAll(".yAxis"); //traemos todas las filas (array) del tablero por su clase
  for (let i = 0; i < row.length; i++) {
    //recorremos todas las filas
    for (let j = 0; j < gameBoard[0].length; j++) {
      //recorremos cada posición del tablero/matriz "gameBoard para crear las celldas"
      let cell = document.createElement("div"); //creamos cada cell y añadimos la classe cell para css
      cell.classList.add("cell");
      cell.innerHTML = gameBoard[i][j];
      cell.value = gameBoard[i][j]; //aquí asignamos a cada celda el valor correspondiente del tablero. Ejemplo: gameboard[2][3]=0  ->  fila 2, clolumna 3
      cell.position = `[${i}, ${j}]`; //asignamos la posición de la celda en el tablero/matriz gameBoard.
      cell.addEventListener("click", e => {
        fire(e.target);
      });
      row[i].appendChild(cell);
    }
  }
};

function fire(cell) {
  if (cell.value == 1) {
    let cellPosition = [];
    let row = 0;
    let col = 0;
    cell.style.background = "red";
    cell.value = 2;
    cell.innerHTML = 2;
    cellPosition = JSON.parse(cell.position);
    row = cellPosition[0];
    col = cellPosition[1];
    checkIfSank(cell, row, col); // revisamos si el barco está hundido. Pasámos como parámetro la celda y la posición de la misma en la matriz/tablero "gameBard", traducida como array
  } else if (cell.value == 0) {
    cell.style.background = "blue";
  }
}

function checkIfSank(cell, row, col) {
  console.log(row, col);
}
