const pow = (a,b)=>{
    ans = 1;
    while(b!=0){
        if(b&1 == 1){
            ans*=a;
            b-=1;
        }else{
            a*=a;
            b = b/2;
        }
    }
    return ans;
}

console.log(pow(2,21));