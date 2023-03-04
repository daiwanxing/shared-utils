/**
 * @description 在小程序自定义状态栏场景下，页面高度为全屏的高度
 * 这时，我们需要得到一个安全的内容区域高度（页面高 - 状态栏高 - 胶囊导航的高）
 * 
 */
export const getSafeContentAreaHeight = () => {
    const { height, top } = wx.getMenuButtonBoundingClientRect();
    const { statusBarHeight, windowHeight } = wx.getSystemInfoSync();

    const navigationPadding = (top - statusBarHeight) * 2; // 上下的padding

    // 自定义导航栏的情况下，windowHeight 等同于 screenHeight

    return windowHeight - (height + statusBarHeight + navigationPadding)
}