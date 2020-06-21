/**
 *
 * 公共的工具类
 * */

// export function debounce(fn, delay=5000) {
//     // 记录上一次的延时器
//     var timer = null;
//
//     return function () {
//         var args = arguments;
//         var that = this;
//         // 清除上一次延时器
//         clearTimeout(timer);
//         timer = setTimeout(function () {
//             fn.apply(that, args)
//         }, delay);
//     }
// }

// 防抖函数
export function debounce(fn, delay) {

    delay = delay || 200;
    var timer;
    return function () {
        var th = this;
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        window.console.log("防抖111111");
        timer = setTimeout(function () {
            timer = null;
            window.console.log("防抖了");
            fn.apply(th, args);
        }, delay);
    };
}
