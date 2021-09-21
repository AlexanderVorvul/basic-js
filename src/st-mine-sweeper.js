import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper ( matrix ) {
  
  function check(matrix, iPos, jPos){
    let mines = 0;
    for(let i = (iPos === 0 ? 0 : iPos-1); i <= (iPos + 1 === matrix.length ? iPos : iPos + 1); i++ )
      for(let j = (jPos === 0 ? 0 : jPos-1); j <= (jPos + 1 === matrix[iPos].length ? jPos : jPos + 1); j++ )
        if (matrix[i][j]) mines++;
    if(matrix[iPos][jPos]) mines--;
    return mines;
  }

  let result = new Array();

  for(let i = 0; i < matrix.length; i++ ){

    result.push(new Array());

    for(let j = 0; j < matrix[i].length; j++ )

      result[i].push( check(matrix, i, j) );
  }  
  return result;
}
