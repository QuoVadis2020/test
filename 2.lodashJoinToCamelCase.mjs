/**
 * 2.
 * +++ 写一个方法，
 * 接受一个下滑线分割的字符串，
 * 将其变成驼峰方式的字符串返回。
 * 如下这个例子：
 * 接受到：to_be_or_not_to_be
 * 返回： toBeOrNotToBe
 * @param {string} text
 * @returns {string}
 */
export function lodashJoinToCamelCase(text) {
    return text.replace(/_([\w]{1})/g, (group, $1) => {
        return $1.toUpperCase();
    });
}
