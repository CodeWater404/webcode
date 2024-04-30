/*
给定一个浮点数，请你判断该数字属于以下哪个区间：[0,25],(25,50],(50,75],(75,100]
。

如果给定的数值小于 0
 或大于 100
，则程序输出 Fora de intervalo，表示超出范围。

开区间 (a,b)
：在实数 a
 和实数 b
 之间的所有实数，但不包含 a
 和 b
。

闭区间 [a,b]
：在实数 a
 和实数 b
 之间的所有实数，包含 a
 和 b
。

输入格式
输入一个浮点数。

输出格式
判断输入数值位于哪个区间，按格式 Intervalo x 输出，其中 x
 为区间范围 [0,25],(25,50],(50,75],(75,100]
 中的一个。

如果数值位于所有区间之外，则输出 Fora de intervalo。

输入样例：
25.01
输出样例：
Intervalo (25,50]
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let x = parseFloat(buf);

    if (x >= 0 && x <= 25)
        console.log("Intervalo [0,25]");
    else if (x > 25 && x <= 50)
        console.log("Intervalo (25,50]");
    else if (x > 50 && x <= 75)
        console.log("Intervalo (50,75]");
    else if (x > 75 && x <= 100)
        console.log("Intervalo (75,100]");
    else
        console.log("Fora de intervalo");

});