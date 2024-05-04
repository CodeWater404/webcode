/*
输入整数 N
，输出一个 N
 阶的回字形二维数组。

数组的最外层为 1
，次外层为 2
，以此类推。

输入格式
输入包含多行，每行包含一个整数 N
。

当输入行为 N=0
 时，表示输入结束，且该行无需作任何处理。

输出格式
对于每个输入整数 N
，输出一个满足要求的 N
 阶二维数组。

每个数组占 N
 行，每行包含 N
 个用空格隔开的整数。

每个数组输出完毕后，输出一个空行。

数据范围
0≤N≤100
输入样例：
1
2
3
4
5
0
输出样例：
1

1 1
1 1

1 1 1
1 2 1
1 1 1

1 1 1 1
1 2 2 1
1 2 2 1
1 1 1 1

1 1 1 1 1
1 2 2 2 1
1 2 3 2 1
1 2 2 2 1
1 1 1 1 1
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let ns = buf.split('\n').map(x => {
        return parseInt(x);
    });

    for (let n of ns) {
        if (n === 0) break;

        for (let i = 0; i < n; i++) {
            let line = "";
            for (let j = 0; j < n; j++) {
                //找规律：每个数就是距离上下左右四个边界的最小值。
                line += `${Math.min(i + 1 , n - i , j + 1 , n - j)} `;
            }
            console.log(line);
        }
        console.log();
    }
});