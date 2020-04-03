let arr=[];
for(let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*100+1);
}
arr.sort(compareNumber);
console.log(arr);

function compareNumber(a,b){
    return a-b;
}