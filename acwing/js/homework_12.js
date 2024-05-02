/*
输入 6
 个实数，它们要么是正数，要么是负数。

请你统计并输出正数的个数。

输入格式
六个数字，每个占一行。

输出格式
输出格式为 x positive numbers，其中 x
 为正数的个数。

数据范围
输入数字的绝对值不超过 100
。

输入样例：
7
-5
6
-3.4
4.6
12
输出样例：
4 positive numbers
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let xs = buf.split('\n').map(x => {
        return parseFloat(x);
    });
    let res = 0;
    for (let x of xs) {
        if (x > 0) {
            res++;
        }
    }
    console.log(`${res} positive numbers`);
});