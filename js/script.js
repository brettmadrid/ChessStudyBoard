let abChess = {};

let movesCount = 0;

const fenCode = document.getElementById("fenCode");
const statusElement = document.getElementById("statusElement");
const flipButton = document.getElementById("flipButton");

const options = {
  animated: false,
  imagesExtension: ".png",
  imagesPath: "images/",
  reversed: false,
  width: 320,
  markLastMove: true,
  markCheck: true,
  coordinates: false
};

abChess = new AbChess("chessboard", options);

abChess.setFEN();
fenCode.innerText = abChess.getFEN(movesCount);

// Function updates status text on screen of who is to move
function updateStatus() {
  let status = " to move.";
  let turn = "White";
  movesCount += 1;
  if (abChess.getActiveColor(movesCount) === "b") {
    turn = "Black";
  }
  if (abChess.isCheck(movesCount)) {
    status = " is in check.";
  }
  statusElement.innerText = turn + status;
  fenCode.innerText = abChess.getFEN(movesCount);
}

abChess.onMovePlayed(updateStatus);

// abChess.onMovePlayed(updateStatus);
flipButton.addEventListener("click", abChess.flip);
