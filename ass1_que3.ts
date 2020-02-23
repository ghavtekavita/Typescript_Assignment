function displayFactor(num:number){
    for(let i=1;i<=(num/2);i++){
        if((num%i)==0){
            console.log(i);
        }
    }
}
displayFactor(20);