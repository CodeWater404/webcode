/*
读取两个整数 A
 和 B
，表示游戏的开始时间和结束时间，以小时为单位。

然后请你计算游戏的持续时间，已知游戏可以在一天开始并在另一天结束，最长持续时间为 24
 小时。

如果 A
 与 B
 相等，则视为持续了 24
 小时。

输入格式
共一行，包含两个整数 A
 和 B
。

输出格式
输出格式为 O JOGO DUROU X HORA(S)，其中 X
 为游戏持续时间。

数据范围
0≤A,B≤23
输入样例1：
16 2
输出样例1：
O JOGO DUROU 10 HORA(S)
输入样例2：
0 0
输出样例2：
O JOGO DUROU 24 HORA(S)
输入样例3：
2 16
输出样例3：
O JOGO DUROU 14 HORA(S)
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
    let res;
    if (a < b) res = b - a;
    else res = 24 - a + b;
    console.log(`O JOGO DUROU ${res} HORA(S)`);
});