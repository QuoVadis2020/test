/**
 * 4.
 * +++ 写一个方法，接受一个字符串；
 * 统计该字符串中各个字符出现的次数和概率，
 * 得到一个数组作为统计结果，返回该结果
 * 要求结果数组按字符出现次数
 * 从小到大的方式排好序
 * 数组中的每一项数据结构如下：
 * ```
 * {
 *    char: 'a',  // 是哪个字符
 *    count: 5，// 该字符出现的次数
 *    percent: '25%' 该数字占的百分比，字符串形式
 * }
 * ```
 * @param {string} text
 * @returns {ICharCountItem[]}
 */
export function countCharactors(text) {
    const tmp = new Map();
    [...text].forEach((s) => {
        const get_s = tmp.get(s) || 0;
        tmp.set(s, get_s + 1);
    });

    return [...tmp.entries()]
        .map(([char, count]) => ({
            char,
            count,
            percent: ((count * 100) / text.length).toFixed(2) + '%',
        }))
        .sort(compare);
}

function compare(a, b) {
    if (a.count - b.count !== 0) return a.count - b.count;
    return a.char.charCodeAt() - b.char.charCodeAt();
}
