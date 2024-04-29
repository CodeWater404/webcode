/*
读取一个整数值，它是工厂中某个事件的持续时间（以秒为单位），请你将其转换为小时：分钟：秒来表示。

输入格式
输入一个整数 N
。

输出格式
输出转换后的时间表示，格式为 hours:minutes:seconds。

数据范围
1≤N≤1000000
输入样例：
556
输出样例：
0:9:16
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let n = parseInt(buf);
    let hours = parseInt(n / 3600);
    let mins = parseInt(n % 3600 / 60);
    let seconds = parseInt(n % 60);

    console.log(`${hours}:${mins}:${seconds}`);
});