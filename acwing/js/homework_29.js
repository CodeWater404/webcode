/*
输入两个整数 a
 和 b
，请你编写一个函数，int gcd(int a, int b), 计算并输出 a
 和 b
 的最大公约数。

输入格式
共一行，包含两个整数 a
 和 b
。

输出格式
共一行，包含一个整数，表示 a
 和 b
 的最大公约数。

数据范围
1≤a,b≤1000
输入样例：
12 16
输出样例：
4
*/
let buf = "";

process.stdin.on("readable" , function(){
   let chunk = process.stdin.read();
   if(chunk) buf += chunk.toString();
});

let gcd = (a , b) => {
  return b ? gcd(b , a % b) : a;  
};

process.stdin.on("end" , function(){
   [a , b] = buf.split(' ').map(x => {
       return parseInt(x);
   }) ;
   console.log(gcd(a , b));
});