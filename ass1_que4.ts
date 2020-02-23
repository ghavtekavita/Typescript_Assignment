function checkPrime(num:number):boolean{
    var no=num/2;
    var i=2;
    for(i=2;i<=no;i++){
        if((num%i)==0){
            break;
        }
    }
    if(i>no){
        return true;
    }
    else{
        return false;
    }
}
var ret:boolean;
ret=checkPrime(56);
if(ret==true){
    console.log("Number is prime")
}
else{
    console.log("Number is not prime")
}