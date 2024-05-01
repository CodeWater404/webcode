/*
给定你三个葡萄牙语单词，这些词将根据下表从左到右定义一个动物。

请你确定并输出这个动物的名称。

https://www.acwing.com/problem/content/672/

输入格式
根据上表，输入包含三个单词，每行一个，用以识别动物，单词由小写字母构成。

输出格式
输出识别出的动物的名称。

输入样例：
vertebrado
mamifero
onivoro
输出样例：
homem
*/
let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let [a, b, c] = buf.split('\n');

    if (a === "vertebrado") {
        if (b === "ave") {
            if (c === "carnivoro") {
                console.log("aguia");
            } else {
                console.log("pomba");
            }
        } else {
            if (c === "onivoro") {
                console.log("homem");
            } else {
                console.log("vaca");
            }
        }
    } else {
        if (b === "inseto") {
            if (c === "hematofago") {
                console.log("pulga");
            } else {
                console.log("lagarta");
            }
        } else {
            if (c === "hematofago") {
                console.log("sanguessuga");
            } else {
                console.log("minhoca");
            }
        }
    }
});