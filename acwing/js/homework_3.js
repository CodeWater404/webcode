/*
给定两个点 P1
 和 P2
，其中 P1
 的坐标为 (x1,y1)
，P2
 的坐标为 (x2,y2)
，请你计算两点间的距离是多少。

distance=(x2−x1)2+(y2−y1)2−−−−−−−−−−−−−−−−−−√
输入格式
输入共两行，每行包含两个双精度浮点数 xi,yi
，表示其中一个点的坐标。

输入数值均保留一位小数。

输出格式
输出你的结果，保留四位小数。

数据范围
−109≤xi,yi≤109
输入样例：
1.0 7.0
5.0 9.0
输出样例：
4.4721
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let lines = buf.split('\n');
    let [x1, y1] = lines[0].split(' ').map(x => {
        return parseFloat(x);
    });
    let [x2, y2] = lines[1].split(' ').map(x => {
        return parseFloat(x);
    });
    let dx = x1 - x2;
    let dy = y1 - y2;
    console.log(Math.sqrt(dx * dx + dy * dy).toFixed(4));
});