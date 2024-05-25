/*
给你一个只包含小写字母的字符串。

请你判断是否存在只在字符串中出现过一次的字符。

如果存在，则输出满足条件的字符中位置最靠前的那个。

如果没有，输出 no。

输入格式
共一行，包含一个由小写字母构成的字符串。

数据保证字符串的长度不超过 100000
。

输出格式
输出满足条件的第一个字符。

如果没有，则输出 no。

输入样例：
abceabcd
输出样例：
e
*/
let buf = "";

process.stdin.on("readable" , function(){
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end" , function(){
    let str = buf.split('\n')[0];
    let cnt = [];
    let cc = {};
    
    for(let c of str){
        if(c in cnt) cnt[c]++;
        else cnt[c] = 1;
    }
    
    for(let c of str){
        if(cnt[c] === 1) {
            console.log(c);
            return;
        }
    }
    console.log("no");
});