import { isString, isObject } from "./type-guard"

export const isEmptyString = (val: unknown) => isString(val) && val.trim() === "";

/**
 * 判断是否为一个空对象 => {}
 * @returns
 */
export const isEmptyObject = (val: any, travelProto = false) => {
  if (!isObject(val)) throw Error("expect normal object");
  if (travelProto) {
    // For ... In operator allowed us traverse the
    // enumerated  property on the object prototype
    const enumerateKeys = [];
    for (let key in val) {
      enumerateKeys.push(key);
    }

    return enumerateKeys.length === 0;
  }

  return Object.keys(val).length === 0;
};

/**
 * @description 判断 number 是否为小数
 */
export const isNumberDecimal = (val: number): val is number =>  /^-?\d+\.\d+$/.test(val.toString());
