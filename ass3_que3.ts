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
class CircleX extends Circle{
    calculateCircumference(){
        let cir=2*this.PI*this.radius;
        return cir;
    }
}

let obj = new CircleX(20);
let area1=obj.claculateArea();
let cir1=obj.calculateCircumference();
console.log("Area of circle with radius 20 is : ",area1);
console.log("Circumference of circle with radius 20 is : ",cir1);

let obj2 = new CircleX(15,7.28);
let area2=obj2.claculateArea();
let cir2=obj2.calculateCircumference();
console.log("Area of circle with radius 15 is : ",area2);
console.log("Circumference of circle with radius 20 is : ",cir1);
