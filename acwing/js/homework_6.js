/*
读取两个正整数值 A
 和 B
。

如果其中一个是另一个的整数倍，则输出 Sao Multiplos，否则输出 Nao sao Multiplos。

输入格式
共一行，两个整数 A
 和 B
。

输出格式
按题目所述，输出结果。

数据范围
0<A,B<100
输入样例：
6 24
输出样例：
Sao Multiplos
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let [a, b] = buf.split(' ').map(x => {
        return parseInt(x);
    });
    if (a % b === 0 || b % a === 0) {
        console.log("Sao Multiplos");
    } else {
        console.log("Nao sao Multiplos");
    }
});