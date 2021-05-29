/**
 * 5.
 * +++ 我们知道：Excel表格的列是使用
 * A-Z的字母来表示列号的
 *
 * 写一个方法，
 * 接受一个字符串形式的Excel列号，
 * 计算出该列号代表第几列，
 * 并将结果返回。
 *
 * 比如A是第一列，所以方法接受A 输出1
 * B是第二列，方法接受B，输出2
 * Z是第26列，方法接受Z 输出26
 * AA是第27列，方法接受AA 输出27
 * 某某字符串是第n列，方法接受该字符串 应该输出n，这个n
 * 就是要找到一个方法传入任意一串字母，然后计算出这个n
 * @param {string} text
 * @returns {number}
 */
export function convertExcelColumnCodeToNumber(text) {
    return [...text]
        .reverse()
        .map((s) => s.charCodeAt(0) - 'A'.charCodeAt(0) + 1)
        .reduce((acc, cur, index) => acc + cur * Math.pow(26, index), 0);
}
