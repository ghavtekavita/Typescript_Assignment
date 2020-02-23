function maximumInArray(arr:number[]):number{
    var max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }  
    }
    return max;
}
var arr:number[]=[56,34,89,12,17];

var ans=maximumInArray(arr);
console.log("Maximum in array is : "+ans);