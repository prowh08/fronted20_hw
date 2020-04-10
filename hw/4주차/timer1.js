let cnt=0;
let id = setInterval(()=>{
    console.log(new Date());
    cnt++;
    if(cnt==10){
        console.log("종료");
        clearInterval(id);
    }
},1000);
