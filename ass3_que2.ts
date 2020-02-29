class Circle{
    radius:number = 0;
    PI:number = 3.14;

    constructor(radius,pi?){
        this.radius=radius;
        this.PI=pi;
    }
    claculateArea(){
        let area=this.PI*this.radius*this.radius;
        return area;
    }
}
let obj = new Circle(20);
 let area1=obj.claculateArea();

console.log("Area of circle with radius 20 is : ",area1);

let obj2 = new Circle(15,7.28);
let area2=obj2.claculateArea();
console.log("Area of circle with radius 15 is : ",area2);
