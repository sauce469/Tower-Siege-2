class Slingshot{
    constructor(polygon,constraintPoint){
        var options={
            bodyA:polygon,
            pointB:constraintPoint,
            stiffness:0.04,
            length:1
        }
        this.sling=Constraint.create(options);
        this.B=constraintPoint;
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null;
    }
    attached(body){
        this.sling.bodyA=body
    }
    display(){
        if (this.sling.bodyA){

        
        var A = this.sling.bodyA.position
        strokeWeight(4); 
        stroke("turquoise");
        line(A.x,A.y,this.B.x,this.B.y)
        }
    }
}