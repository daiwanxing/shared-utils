export const isUndefined = (val) =>
  Object.prototype.toString.call(val) === "[object Undefined]";

export const isObject = (val) =>
  Object.prototype.toString.call(val) === "[object Object]";

export const isString = (val) =>
  Object.prototype.toString.call(val) === "[object String]";

export const isNumber = (val) =>
  Object.prototype.toString.call(val) === "[object Number]" && !isNaN(val);

export const isNumberDecimal = (val) => isNumber(val) && /^\d+\.\d+$/.test(val);

export const isTruthy = (val) => Boolean(val);

export const isNull = (val) => val === null;

export const isEmptyString = (val) => isString(val) && val.trim() === "";

export const isFunction = (val) =>
  Object.prototype.toString.call(val) === "[object Function]";

/**
 * 判断是否为一个空对象 => {}
 * @param {*} val
 * @param {*} travelProto
 * @returns
 */
export const isEmptyObject = (val, travelProto = false) => {
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

export const isIE = (userAgent) => /Trident|MSIE/.test(userAgent);
