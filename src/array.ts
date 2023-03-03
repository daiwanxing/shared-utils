
/**
 * 返回两个数组中相同的元素
 */
export const intersection = function (from: any[], to: any[]) {

    const leftScan = from.filter(item => ~to.indexOf(item)); //[1,2,3]

    const rightScan = to.filter(item => ~from.indexOf(item)); // [2,3]

    return Array.from(new Set(leftScan.concat(rightScan)));
}

export const unionIntersection = function (from: any[], to: any[]) {
    return [...new Set(from.concat(to))];
}

export const excludeIntersection = function (from: any[], to: any[]) {
    return from.filter(item => !~to.indexOf(item));
}