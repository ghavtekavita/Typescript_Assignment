function arraySumation(arr:number[]):number{
    var sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]; 
    }
    return sum;
}
var arr:number[]=[56,34,89,12,17];

var ans=arraySumation(arr);
console.log("Sumation of element in array is : "+ans);