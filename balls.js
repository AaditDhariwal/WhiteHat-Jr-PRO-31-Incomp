class Balls{
    constructor(x,y){
      var options={
          isStatic:false,
          restitution:0.9,
          density:5.0
             }
      this.body=Bodies.circle(x,y,3,options);
      this.radius=3;
      World.add(world,this.body);
    }
    display(){
    
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("white");
    ellipseMode(CENTER);
    ellipse(0,0,20,20);
    pop();
    }
}