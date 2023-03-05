import { toString } from "./type-transform";

export const isUndefined = (val: unknown): val is undefined => toString(val) === "[object Undefined]";

export const isDef = <T = any>(val: T): val is T => typeof val !== "undefined"; 

export const isObject = (val: unknown) : val is object => toString(val) === "[object Object]";

export const isString = (val: unknown): val is string => toString(val) === "[object String]";

export const isNumber = (val: unknown): val is number => toString(val) === "[object Number]";

export const inInteger = (val: any): val is number => Number.isInteger(val);

export const isTruthy = (val: any) => Boolean(val);

export const isNull = (val: any) => val === null;

export const isFunction = (val: unknown): val is Function => toString(val) === "[object Function]";

export const isSymbol = (val: unknown): val is symbol => typeof val === "symbol";

export const isArray = (val: unknown): val is [] => Array.isArray(val);

export const isPrimitiveType = (val: unknown) => isNull(val) || (typeof val !== "object" && typeof val !== "function");