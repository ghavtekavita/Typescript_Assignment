function checkArmstrong(no:number):boolean{
    var num:number=no;
    var sum:number=0;
    var cube:number=0;
    var digit:number=0;
    while(num!=0){
        digit=num%10;
        cube=digit*digit*digit;
        sum=sum+cube;
        num=num/10;
    }
    if(sum==no){
        return true;
    }
    else{
        return false;
    }
}
 
var ret:boolean=checkArmstrong(153);
if(ret==true){
    console.log("Number is armstrong");
}
if(ret==false){
    console.log("Number is not armstrong");
}