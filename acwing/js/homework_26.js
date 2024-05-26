/*
编写程序，读入一行英文(只包含字母和空格，单词间以单个空格分隔)，将所有单词的顺序倒排并输出，依然以单个空格分隔。

输入格式
输入为一个字符串（字符串长度至多为 100
）。

输出格式
输出为按要求排序后的字符串。

输入样例：
I am a student
输出样例：
student a am I
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let words = buf.split('\n')[0].split(' ');
    words.reverse();

    let res = "";
    for (let w of words) {
        res += w + ' ';
    }
    console.log(res);
});