let arr=[];
for(let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*100+1);
}

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr.splice(i,1);
        i-=1;
    }
}

console.log(arr);