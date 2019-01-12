/**
 * [getRandomNum 生成随机数]
 * @param  {[type]} Min    [随机数最小范围]
 * @param  {[type]} Max    [随机数最大范围]
 */
export function r_int(Min, Max) {
    parseInt(Math.random() * (Max - Min) + Min);
}  