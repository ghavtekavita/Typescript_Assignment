class Arithmatic{
    no1:number=10;
    no2:number=20;
    ans:number=0;

    constructor(num1,num2){
        this.no1=num1;
        this.no2=num2;
        this.ans=0;
    }
    Addition(){
        this.ans=this.no1+this.no2;
        return this.ans;
    }
    Subtraction(){
        this.ans=this.no1-this.no2;
        return this.ans;
    }
    Multiplication(){
        this.ans=this.no1*this.no2;
        return this.ans;
    }
    Division(){
        this.ans=this.no1/this.no2;
        return this.ans;
    }
}
let obj = new Arithmatic(45,5);
let add = obj.Addition();
let sub = obj.Subtraction();
let mul = obj.Multiplication();
let div = obj.Division();

console.log("Addition is : "+add);
console.log("Subtraction is : "+sub);
console.log("Multiplication is : "+mul);
console.log("Division is : "+div);