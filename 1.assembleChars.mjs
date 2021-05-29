/**
 * 1.
 * +++ 写一个方法, 接受一个字符串，
 * 处理该字符串，
 * 将相同的字符集合在一起，
 * 然后返回新字符，
 * 先出现的字符集合应该排在前面
 * 如下这个例子：
 * 接受到：ddaeddceddbebca
 * 返回：  ddddddaaeeeccbb
 * @param {string} text
 * @returns {string}
 */
export function assembleChars(text) {
    const tmp = new Map();
    let result = '';
    [...text].forEach((s) => {
        const get_s = tmp.get(s) || 0;
        tmp.set(s, get_s + 1);
    });
    tmp.forEach((value, key) => {
        result += key.repeat(value);
    });
    return result;
}
