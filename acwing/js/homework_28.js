/*
给定一个长度为 n
 的数组 a
 以及两个整数 l
 和 r
，请你编写一个函数，void sort(int a[], int l, int r)，将 a[l]∼a[r]
 从小到大排序。

输出排好序的数组 a
。

输入格式
第一行包含三个整数 n，l，r
。

第二行包含 n
 个整数，表示数组 a
。

输出格式
共一行，包含 n
 个整数，表示排序完成后的数组 a
。

数据范围
0≤l≤r<n≤1000
输入样例：
5 2 4
4 5 1 3 2
输出样例：
4 5 1 2 3
*/
let buf = "";

process.stdin.on("readable" , function() {
   let chunk = process.stdin.read();
   if(chunk) buf += chunk.toString();
});

let bubble_sort = (q , l , r) => {
    for(let i = r ; i > l ; i--){
        for(let j = l ; j < i ; j++){
            if(q[j] > q[j + 1]) {
                [q[j] , q[j + 1]] = [q[j + 1] , q[j]];
            }
        }
    }
};

process.stdin.on("end" , function(){
    let lines = buf.split('\n');
    let [n , l , r] = lines[0].split(' ').map(x => {
        return parseInt(x);
    });
    let q = lines[1].split(' ').map(x => {
        return parseInt(x);
    });
    bubble_sort(q , l , r);
    
    console.log(q.join(' '));
});
