function print_Fibonacci(num){
    var i=1;
    var no1=1;
    var no2=0;
    var ans=0;
    for(i=1; ;i++){
        ans=no1+no2;
        console.log(ans+ " ");
        no2=no1;
        no1=num;
        if(ans>=num){
            break;
        }
    }
}

print_Fibonacci(25);