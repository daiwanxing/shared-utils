/**
 * 判断用户代理是否为 IE
 * @param {string} userAgent
 * @returns
 */
export const isIE = (userAgent: string) => /Trident|MSIE/.test(userAgent);
