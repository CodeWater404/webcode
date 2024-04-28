/*
输入两个整数，求这两个整数的和是多少。

输入格式
输入两个整数A,B
，用空格隔开

输出格式
输出一个整数，表示这两个数的和

数据范围
0≤A,B≤108
输入样例
3 4
输出样例
7
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) {
        buf += chunk.toString();
    }
});

process.stdin.on("end", function () {
    let [a, b] = buf.split(' ').map(x => {
        return parseInt(x);
    });
    console.log(a + b);
});