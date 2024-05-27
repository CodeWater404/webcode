/*
给定一个整数 n
，将数字 1∼n
 排成一排，将会有很多种排列方法。

现在，请你按照字典序将所有的排列方法输出。

输入格式
共一行，包含一个整数 n
。

输出格式
按字典序输出所有排列方案，每个方案占一行。

数据范围
1≤n≤9
输入样例：
3
输出样例：
1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1
*/
let buf = "";

process.stdin.on("readable" , function(){
    let chunk = process.stdin.read();
    if(chunk) buf += chunk.toString();
});

let path = [];
let st = [];

let dfs = (u , n) => {
    if(u == n) {
        console.log(path.join(' '));
    }else{
        for(let i = 1 ; i <= n ; i++){
            if(!st[i]){
                path.push(i);
                st[i] = true;
                dfs(u + 1 , n);
                st[i] = undefined;
                path.pop();
            }
        }
    }
}

process.stdin.on("end" , function(){
   let n = parseInt(buf);
   dfs(0 , n);
});