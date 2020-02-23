function secoundMaximumInArray(arr:number[]):number{
    var max1=arr[0];
    var max2=arr[0];
    for(let i=0;i<arr.length;i++){
        if((arr[i]>max1)&&(arr[i]>max2)){
            max2=max1;
            max1=arr[i];
        }  
        else if((arr[i]<max1)&&(arr[i]>max2)){
            max2=arr[i];
        }
        else if(max1==max2){
            max2=arr[i];
        }
    }
    return max2;
}
var arr:number[]=[56,34,89,12,17];

var ans=secoundMaximumInArray(arr);
console.log("Secound Maximum in array is : "+ans);