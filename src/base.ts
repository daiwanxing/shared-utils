
/**
 * target => { name: "" //del, arr: [], null }
 * @param {*} target
 * @returns
 */
// export const filterEmpty = (target: any) => {
//   if (!isObject(target))
//     throw new Error('expect a normal object such as { name: "foo }');

//   Object.keys(target).reduce((acc, key) => {
//     const val = target[key];
//     // 普通类型和基本类型要做区分
//     if (isUndefined(val) || isNull(val)) {
//       acc[key] = target[key];
//     }
//     return acc;
//   }, {});
// };

/**
 * 对数字进行千位分隔符
 */
export const numberWithCommas = (val: number) => val.toLocaleString();

export function flatTree() {
  //
}