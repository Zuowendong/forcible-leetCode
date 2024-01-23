/**
 * 请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。要求此函数可以解析任何值。

示例 1：
输入：millis = 100
输出：100
解释：
在 100ms 后此异步函数执行完时返回一个 Promise 对象
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});

示例 2：
输入：millis = 200
输出：200
解释：在 200ms 后函数执行完时返回一个 Promise 对象
 
 */

export async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}
