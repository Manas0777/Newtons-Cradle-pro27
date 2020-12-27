//class Rope{

    //constructor(body1,body2,offsetX,offsetY){
     //          this.offsetX = offsetX;
     //          this.offsetY = offsetY;
      //         var op = {
      //         bodyA : body1,
       //        bodyB : body2,
       //        pointB :{x:this.offsetX,y:this.offsetY}

         //      }
          //     this.rope = Matter.Constrained.create(op);
           //   World.add(world,this.rope)
    //                                         }
//display(){
      
    // var point1 = this.rope.bodyA.position;
    // var point2 = this.rope.bodyB.position;
    // strokeWeight(2)

    // var Anchor1X = point1.x;
    // var Anchor2X = point1.y;

    // var Anchor2X = point2.x + this.offsetX;
    // var Anchor2Y = point2.y + this.offsetY;

    // line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
//}
class Rope {
    constructor(bodyA,bodyB)
    {
    var options= {
    
            bodyA : bobObject1.body,
            bodyB : roof.body,
            length : 10,
            stiffness : 0.04
    
    
        }
    
 
this.slingshot = Constraint.create(options);
World.add(world,this.slingshot);
    
    
    
    
    }
    
    
    
    display()
    {
    var pointA = this.slingshot.bodyA.position;
    var pointB = this.slingshot.bodyB.position;
    strokeWeight(3);
    line (pointA.x,pointA.y,pointB.x,pointB.y)
    
    
    }
    
    
    
    }



















    
       //}
