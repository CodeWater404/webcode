/*
读取四个整数 A,B,C,D
，并计算 (A×B−C×D)
 的值。

输入格式
输入共四行，第一行包含整数 A
，第二行包含整数 B
，第三行包含整数 C
，第四行包含整数 D
。

输出格式
输出格式为 DIFERENCA = X，其中 X
 为 (A×B−C×D)
 的结果。

数据范围
−10000≤A,B,C,D≤10000
输入样例：
5
6
7
8
输出样例：
DIFERENCA = -26
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let [a, b, c, d] = buf.split("\n").map(x => {
        return parseInt(x);
    });
    console.log(`DIFERENCA = ${a * b - c * d}`);
});