/*
输入一个奇数 n
，输出一个由 * 构成的 n
 阶实心菱形。

输入格式
一个奇数 n
。

输出格式
输出一个由 * 构成的 n
 阶实心菱形。

具体格式参照输出样例。

数据范围
1≤n≤99
输入样例：
5
输出样例：
  *  
 *** 
*****
 *** 
  *  
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let n = parseInt(buf);
    let m = parseInt(n / 2);

    //曼哈顿距离（两个点横纵坐标各自相减的绝对值的和）；菱形四周边到中心点都是的距离都是n/2
    //所以遍历以n为正方形的范围，距离小于n/2的都填充上*即可
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < n; j++) {
            if (Math.abs(i - m) + Math.abs(j - m) <= m)
                line += '*';
            else
                line += ' ';
        }
        console.log(line);
    }

});