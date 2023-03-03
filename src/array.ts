
/**
 * @description 返回两个数组的交集
 */
export const intersection = function<T> (from: T[], to: T[]) {
    const leftScan = from.filter(item => ~to.indexOf(item));
    const rightScan = to.filter(item => ~from.indexOf(item));

    return Array.from(new Set(leftScan.concat(rightScan)));
}

/**
 * @description 获取两个数组的并集
 */
export const union = function<T>(from: T[], to: T[]) {
    return [...new Set([...from, ...to])];
}

/**
 * @description 获取两个数组的差集
 */
export const difference = function<T> (from: T[], to: T[]) {
    return from.filter(item => !~to.indexOf(item));
}