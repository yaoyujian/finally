function test() {
    for(let i=1;i<3;i++){
        console.log(i);
    }
    console.log(1);
}
test();

{
let a,b,rest;
[a,b]=[1,2];
console.log(a,b);//输出1，2
}
{
let a,b,rest;
[a,b,...rest]=[1,2,3,4,5,6]
console.log(a,b,rest)//输出1,2,[3,4,5,6
}