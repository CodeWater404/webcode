/*
输入一个字符串，以回车结束（字符串长度不超过 100
）。

该字符串由若干个单词组成，单词之间用一个空格隔开，所有单词区分大小写。

现需要将其中的某个单词替换成另一个单词，并输出替换之后的字符串。

输入格式
输入共 3
 行。

第 1
 行是包含多个单词的字符串 s
;

第 2
 行是待替换的单词 a
(长度不超过 100
);

第 3
 行是 a
 将被替换的单词 b
(长度不超过 100
)。

输出格式
共一行，输出将 s
 中所有单词 a
 替换成 b
 之后的字符串。

输入样例：
You want someone to help you
You
I
输出样例：
I want someone to help you
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
})

process.stdin.on("end", function () {
    let [str, a, b] = buf.split('\n');
    let words = str.split(' ');

    let res = "";
    for (let w of words) {
        if (w === a) res += b + ' ';
        else res += w + ' ';
    }
    console.log(res);
});