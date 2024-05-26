/*
给出若干个字符串，输出这些字符串的最长公共后缀。

输入格式
由不超过 5
 组输入组成。

每组输入的第一行是一个整数 N
。

N
 为 0
 时表示输入结束，否则后面会继续有 N
 行输入，每行是一个字符串（字符串内不含空白符）。

每个字符串的长度不超过 200
。

输出格式
每组数据输出一行结果，为 N
 个字符串的最长公共后缀（可能为空）。

数据范围
1≤N≤200
输入样例：
3
baba
aba
cba
2
aa
cc
2
aa
a
0
输出样例：
ba

a

*/let buf = "";

process.stdin.on("readable" , function(){
    let chunk = process.stdin.read();
    if(chunk) buf += chunk.toString();
});

let reverse = (str) => {
    // 字符串没有反转，数组有
    return str.split('').reverse().join('');
}

process.stdin.on("end" , function() {
    let lines = buf.split('\n')
    for(let i = 0 ; i < lines.length ;){
        let n = parseInt(lines[i]);
        if(n === 0) break;
        i++; //跳过n
        
        // 把接下来的几行字符串反转，求后缀变成求前缀，方便下标从0开始
        for(let j = 0 ; j < n ; j++){
            lines[i + j] = reverse(lines[i + j]);
        }
        
        let res = "";
        // k遍历每组第一个字符串的长度
        for(let k = 0 ; k < lines[i].length ; k++) { //首先前缀不能超出每组第一个字符串的长度
            let is_same = true;
            for(let j = 1 ; j < n ; j++){ //j遍历每组除了第一个字符串的每个字符串
                // 每组的第i+j个字符串的第k个字符都和每组的第一个字符串的第k个比较
                if(lines[i + j][k] != lines[i][k]){
                    is_same = false; //第k个字符不等，标记
                    break;
                }
            }
            //true，说明每组所有字符串第k个字符都相等
            if(is_same) {
                res += lines[i][k];
            }else{
                //否则不等，跳出这一组字符串的比较
                break;
            }
        }
        // 到下一轮计算后缀
        i += n;
        // 最后记得把结果反转
        console.log(reverse(res));
    }
})