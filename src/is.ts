import { isString, isObject } from "./type-guard";

export const isEmptyString = (val: unknown) =>
  isString(val) && val.trim() === "";

/**
 * @description 判断是否为一个空对象 => {}
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
export const isNumberDecimal = (val: number): val is number =>
  /^-?\d+\.\d+$/.test(val.toString());

/**
 * @description 判断用户代理是否为 IE
 */
export const isIE = (userAgent: string) => /Trident|MSIE/.test(userAgent);

/**
 * 判断用户代理是否为 chrome
 */
export const isChrome = function (version?: number) {
  const regex = new RegExp("Chrome/" + (version || "\\d+"));
  return regex.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
};


/**
 * @description 判断用户代理是否为 safari
 */
export const isSafari = function (version?: number) {
  const regex = new RegExp(`^((?!chrome|android).)*(Version\/${version || '\\d+'}).*Safari`, 'i');
  return regex.test(navigator.userAgent);
}

/**
 * @description 判断两个值是否浅相等
 */
export const isShallowEqual = function<T extends any, U extends any> (first: T, last: U) {
  
}