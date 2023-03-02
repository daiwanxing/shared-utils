import { toString } from "./transform";

export const isUndefined = (val: unknown): val is undefined => toString(val) === "[object Undefined]";

export const isDef = <T = any>(val: T): val is T => typeof val !== "undefined"; 

export const isObject = (val: unknown) : val is object => toString(val) === "[object Object]";

export const isString = (val: unknown): val is string => toString(val) === "[object String]";

export const isNumber = (val: unknown): val is number => toString(val) === "[object Number]";

export const inInteger = (val: any): val is number => Number.isInteger(val);

export const isNumberDecimal = (val: unknown) => isNumber(val) && /^\d+\.\d+$/.test(val.toString());

export const isTruthy = (val: any) => Boolean(val);

export const isNull = (val: any) => val === null;

export const isEmptyString = (val: unknown) => isString(val) && val.trim() === "";

export const isFunction = (val: unknown): val is Function => toString(val) === "[object Function]";

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