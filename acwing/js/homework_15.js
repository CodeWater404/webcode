/*
读取一系列的整数 X
，对于每个 X
，输出一个 1,2,…,X
 的序列。

输入格式
输入文件中包含若干个整数，其中最后一个为 0
，其他的均为正整数。

每个整数占一行。

对于输入的正整数，按题目要求作输出处理。

对于最后一行的整数 0
，不作任何处理。

输出格式
对于每个输入的正整数 X
，输出一个从 1
 到 X
 的递增序列，每个序列占一行。

数据范围
1≤X≤100
输入样例：
5
10
3
0
输出样例：
1 2 3 4 5
1 2 3 4 5 6 7 8 9 10
1 2 3
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let xs = buf.split('\n').map(x => {
        return parseInt(x);
    });
    for (let x of xs) {
        if (x === 0) {
            break;
        }
        let line = "";
        for (let i = 1; i <= x; i++) {
            line += `${i} `;
        }
        console.log(line);
    }
});