let s = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
for(let i=0;i<s.length;i++){
    if(s[i].search(/[aeiou]/i)==0)
    console.log("위치 : "+ i);
} 