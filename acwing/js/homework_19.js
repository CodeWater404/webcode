/*
给定一行长度不超过 100
 的非空字符串，请你求出它的具体长度。

输入格式
输入一行，表示一个字符串。注意字符串中可能包含空格。

输出格式
输出一个整数，表示它的长度。

数据范围
1≤字符串长度≤100

字符串末尾无回车

输入样例：
I love Beijing.
输出样例：
15
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let str = buf.split('\n')[0];

    console.log(str.length);
});