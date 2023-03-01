import { isObject, isNull, isUndefined, isNumberDecimal, isNumber } from "./guard";

/**
 * target => { name: "" //del, arr: [], null }
 * @param {*} target
 * @returns
 */
export const filterEmpty = (target) => {
  if (!isObject(target))
    throw new Error('expect a normal object such as { name: "foo }');

  Object.keys(target).reduce((acc, key) => {
    const val = target[key];
    // 普通类型和基本类型要做区分
    if (isUndefined(val) || isNull(val)) {
      acc[key] = target[key];
    }
    return acc;
  }, {});
};

export const numberWithCommas = (val) => {
  let result;

  if (isNumber(val)) return val.toString();


  if (isNumberDecimal(+val)) {

  } else {
    result = val
  }

  return result;
}


/**
 * @description 检测用户代码的运行环境
 */
export const environment = () => {
  if (window.navigator && window.history)
}