let turn = "X";
let move = 0;
const box = document.querySelectorAll(".cell");
const reset = document.querySelector(".reset-btn");
const winPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

box.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerText !== "") return; // Prevent clicking same cell again

    if (turn === "X") {
      cell.innerText = "X";
      turn = "O";
    } else {
      cell.innerText = "O";
      turn = "X";
    }

    cell.disabled = true;
    move++;

    let hasWinner = checkWinner();
    if (hasWinner) {
      // Disable all remaining cells
      box.forEach(c => c.disabled = true);
    } else if (move === 9) {
      alert("Match is draw. Click Play again");
    }
  });
});


let checkWinner = () => {
  let val = false;
  for (let pattern of winPattern) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3 && pos3 === "X") {
        alert("Winnner X");
        val = true;
      } else if (pos1 === pos2 && pos2 === pos3 && pos3 === "O") {
        alert("Winner O");
        val = true;
      }
    }

  }
  return val;
};


reset.addEventListener("click", () => {
  box.forEach((cell) => {
    cell.innerText = "";
    cell.disabled = false;
  });
  turn = "X";

});