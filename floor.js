class Floor{
    constructor(x,y){
        var options={
            isStatic:true,
            density:1.0,
            friction:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        fill("cyan");
        rectMode(CENTER);
        rect(10,10,800,15);
        pop();
    }
}