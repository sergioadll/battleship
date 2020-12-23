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
      //recorremos cada celda del tablero/matriz "gameBoard"
      let cell = document.createElement("div"); //creamos cada cell y añadimos la classe cell para css
      cell.classList.add("cell");
      cell.innerHTML = gameBoard[i][j];
      cell.value = gameBoard[i][j]; //aqui asignamos a cada celda el valor correspondiente del tablero. Ejemplo: gameboard[2][3]=0  ->  fila 2, clolumna 3

      cell.addEventListener("click", e => {
        fire(e);
      });
      row[i].appendChild(cell);
    }
  }
};

function fire(e) {
    if (e.target.value == 1) {
        e.target.style.background = "red";
        e.target.value = 2;
        e.target.innerHTML = 2;
    } else if (e.target.value == 0) {
        e.target.style.background = "blue";
    }
}
