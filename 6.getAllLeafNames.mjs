/**
 * 6.
 * +++ 有这样一个树形数据结构，
 * 根节点是一个对象，
 * 其中有一个属性name
 * 可能还有一个children属性，
 * 里面又包含同样的结构。
 * 层层递进，如果递进到某层没有
 * 这个children属性，
 * 或者children中个数为0，
 * 则说明到了叶子节点。
 *
 * 可能根节点本身就是一个叶子
 *
 * 写一个方法，
 * 接受一个这样的树形数据结果，
 * 收集出所有叶子节点的名字
 * 放到数组中, 返回该数组。
 * interface ITree {
 *  name: string,
 *  children: ITree[];
 * }
 * @param {ITree}
 * @returns {string[]}
 */
export function getAllLeafNames(tree) {
    const result = [];
    function findLeaf(node) {
        if (!node.children?.length) return result.push(node.name);

        for (let child of node.children) {
            findLeaf(child);
        }
    }
    findLeaf(tree);
    return result;
}
