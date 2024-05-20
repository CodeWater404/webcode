/*
756. 蛇形矩阵

输入两个整数 n
 和 m
，输出一个 n
 行 m
 列的矩阵，将数字 1
 到 n×m
 按照回字蛇形填充至矩阵中。

具体矩阵形式可参考样例。

输入格式
输入共一行，包含两个整数 n
 和 m
。

输出格式
输出满足要求的矩阵。

矩阵占 n
 行，每行包含 m
 个空格隔开的整数。

数据范围
1≤n,m≤100
输入样例：
3 3
输出样例：
1 2 3
8 9 4
7 6 5
*/
let buf = "";

process.stdin.on("readable" , function(){
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end" , function(){
   let [n , m] = buf.split(' ').map(x => {
       return parseInt(x);
   });
   let res = [];
   for (let i = 0 ; i < n ; i++) {
       res[i] = [];
       for (let j = 0 ; j < m ; j++) {
           res[i].push(0);
       }
   }
   
   let dx = [-1 , 0 , 1 , 0] , dy = [0 , 1 , 0 , -1];
   let x = 0 , y = 0 , d = 1;
   for (let i = 1 ; i <= n * m; i++){
       res[x][y] = i;
       let a = x + dx[d] , b = y + dy[d];
       if (a < 0 || a >= n || b < 0 || b >= m || res[a][b]) {
           d = (d + 1) % 4;
           a = x + dx[d] , b = y + dy[d];
       }
       x = a , y = b;
   }
   
   for (let i = 0 ; i < n ; i++){
       let line = "";
       for (let j = 0 ; j < m ; j++) {
           line += `${res[i][j]} `;
       }
       console.log(line);
   }
});