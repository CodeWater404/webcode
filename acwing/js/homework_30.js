/*
给定一个 row×col
 的二维数组 a
，请你编写一个函数，void print2D(int a[][N], int row, int col)，打印数组构成的 row
 行，col
 列的矩阵。

注意，每打印完一整行需要输出一个回车。

输入格式
第一行包含两个整数 row,col
。

接下来 row
 行，每行包含 col
 个整数，表示完整二维数组 a
。

输出格式
共 row
 行，每行 col
 个整数，表示打印出的矩阵。

数据范围
1≤row≤100
,
1≤col≤100
输入样例：
3 4
1 3 4 5
2 6 9 4
1 4 7 5
输出样例：
1 3 4 5
2 6 9 4
1 4 7 5
*/
let buf = "";

process.stdin.on("readable" , function(){
   let chunk = process.stdin.read();
   if(chunk) buf += chunk.toString();
});

let print2D = (a , row , col) => {
    for(let i = 0 ; i < row ; i++){
        console.log(a[i].join(' '));
    }
};

process.stdin.on("end" , function(){
    let lines = buf.split('\n');
    
    let [row , col] = lines[0].split(' ').map(x => {
        return parseInt(x);
    });
    let a = [];
    for(let i = 0 ; i < row ; i++){
        a.push(lines[i + 1].split(' ').map(x => {
            return parseInt(x);
        }));
    }
    
    print2D(a , row , col);
});