import { isObject, isUndefined, isNull } from "./type-guard";

/**
 * 对数字进行千位分隔符
 */
export const numberWithCommas = (val: number) => val.toLocaleString();

export function flatTree() {
  //
}

/**
 * @description 过滤对象上值为空的属性, 空值可以是 `null | undefined`
 */
export function filterShallowUndef<T extends Record<string, unknown>>(
  target: T
) {
  if (!isObject(target)) {
    throw new Error(`expect a object but got ${typeof target}`);
  }

  return Object.keys(target).reduce((acc, key) => {
    const val = target[key];
    if (!isUndefined(val) && !isNull(val)) {
      acc[key] = target[key];
    }
    return acc;
  }, {} as Record<string, unknown>);
}
