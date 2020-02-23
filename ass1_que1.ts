function Maximum(no1:number,no2:number,no3:number):number{
    var max=0;
    if((no1>=no2)&&(no1>=no3)){
        max=no1;
    }
    else if((no2>=no1)&&(no2>=no3)){
        max=no2;
    }
    else{
        max=no3;
    }
    return max;
}

let ans=Maximum(67,43,79);
console.log("Maximum number is"+ans);