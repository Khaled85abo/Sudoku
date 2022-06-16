const startArray = 1;
const sudokuLength = 4;
const arr = [1, 2, 3, 4];
const sudoku = [];

function generateSudoku() {
  // Generate  Arrays
  for (let i = 0; i < sudokuLength; i++) {
    sudoku.push([]);
    const arr1 = [...arr];
    if (i == startArray) {
      for (let i = 0; i < sudokuLength; i++) {
        const index = Math.floor(Math.random() * arr1.length);
        sudoku[startArray].push(arr1[index]);
        arr1.splice(index, 1);
      }
    }
  }
  console.log(sudoku);
  // Generate all other Arrays
  generateArrays();
  return sudoku;
}

function generateArrays() {
  for (let i = 0; i < sudokuLength; i++) {
    const nums = [...arr];
    if (i !== startArray) {
      // Generate numbers for each array left except the start array
      for (let j = 0; j < sudokuLength; j++) {
        const index = Math.floor(Math.random() * nums.length);

        // Check Validity
        const valid = checkValidity(i, j, nums[index]);
        // if valid push to sudoku array
        // or check next num
        if (valid) {
          sudoku[i].push(nums[index]);
          nums.splice(index, 1);
        } else {
          console.log("not valid");
        }
      }
    }
  }
}
function checkValidity(sudokuArray, numIndex, num) {
  let valid = true;
  valid = checkColumnValidity(sudokuArray, numIndex, num);
  //  valid = checkColumnValidity()
  //  valid = checkSquareValidity()

  return valid;
}

function checkColumnValidity(sudokuArray, numIndex, num) {
  let valid = true;
  for (let i = 0; i < sudokuLength; i++) {
    if (i !== sudokuArray) {
      if (sudoku[i][numIndex] == num) {
        valid = false;
      }
    }
  }
  return valid;
}

const game = generateSudoku();
game;
