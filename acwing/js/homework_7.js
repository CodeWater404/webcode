/*
某商店出售 5
 种零食，零食编号为 1∼5
。

5
 种零食的价目表如下所示：

零食种类        价格
零食  1         R$ 4.00
零食  2         R$ 4.50
零食  3         R$ 5.00
零食  4         R$ 2.00
零食  5         R$ 1.50
现在给定某种零食的编号和数量，请你计算总价值是多少。

输入格式
输入包含两个整数 x
 和 y
，其中 x
 为零食编号，y
 为零食数量。

输出格式
输出格式为 Total: R$ X，其中 X
 为总价值，保留两位小数。

数据范围
1≤x≤5
,
1≤y≤100
输入样例：
3 2
输出样例：
Total: R$ 10.00
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let [x, y] = buf.split(' ').map(x => {
        return parseInt(x);
    });
    let p;
    if (x === 1) p = 4;
    else if (x === 2) p = 4.5;
    else if (x === 3) p = 5;
    else if (x === 4) p = 2;
    else p = 1.5;

    console.log(`Total: R$ ${(p * y).toFixed(2)}`);
});