/**
 * 3.
 * +++ 写一个方法，
 * 接受一个n*n整数二维数组(正方形矩阵)
 *
 * 算出位于其对角线上所有整数之和，
 * 返回这个和
 *
 * 不能更改传入的数组。
 * @param {number[][]} matrix
 * @returns {number}
 */
export function getSumOfNumbersOnSquareMatrixDiagonal(matrix) {
    let a = 0,
        b = matrix.length - 1;
    let result = 0;
    while (a <= b) {
        if (a == b) {
            result += matrix[a][a];
        } else {
            result += matrix[a][a] + matrix[a][b] + matrix[b][a] + matrix[b][b];
        }
        a++;
        b--;
    }
    return result;
}
