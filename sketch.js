const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ob1,ob2,ob3,ob4,ob5,ob6,ob7,
    ob8,ob9,ob10,ob11,ob12,ob13,ob14,
    ob15,ob16,ob17,ob18,ob19,ob20,ob21,
    ob22,ob23,ob24,ob25,ob26,ob27,ob28;

var floor;

var line1,line2,line3;

var b1,b2,b3,b4,b5,b6,b7;

function setup() {
  var canvas=createCanvas(800,600);
 
  engine = Engine.create();
  world = engine.world;

  line1=createSprite(170,500,10,200);
  line1.shapeColor="cyan"

  line2=createSprite(380,500,10,200);
  line2.shapeColor="cyan"

  line2=createSprite(600,500,10,200);
  line2.shapeColor="cyan"

  b1=new Balls(random(0,800),100);
}

function draw() {
  background("black");
   Engine.update(engine);


  ob1=new Ob(50,100);
  ob2=new Ob(150,100);
  ob3=new Ob(250,100);
  ob4=new Ob(350,100);
  ob5=new Ob(450,100);
  ob6=new Ob(550,100);
  ob7=new Ob(650,100);

  ob8=new Ob(50,175);
  ob9=new Ob(150,175);
  ob10=new Ob(250,175);
  ob11=new Ob(350,175);
  ob12=new Ob(450,175);
  ob13=new Ob(550,175);
  ob14=new Ob(650,175);

  ob15=new Ob(50,250);
  ob16=new Ob(150,250);
  ob17=new Ob(250,250);
  ob18=new Ob(350,250);
  ob19=new Ob(450,250);
  ob20=new Ob(550,250);
  ob21=new Ob(650,250);

  ob22=new Ob(50,325);
  ob23=new Ob(150,325);
  ob24=new Ob(250,325);
  ob25=new Ob(350,325);
  ob26=new Ob(450,325);
  ob27=new Ob(550,325);
  ob28=new Ob(650,325);

  
  floor=new Floor(390,585);

  ob1.display();
  ob2.display();
  ob3.display();
  ob4.display();
  ob5.display();
  ob6.display();
  ob7.display();

  ob8.display();
  ob9.display();
  ob10.display();
  ob11.display();
  ob12.display();
  ob13.display();
  ob14.display();

  ob15.display();
  ob16.display();
  ob17.display();
  ob18.display();
  ob19.display();
  ob20.display();
  ob21.display();

  ob22.display();
  ob23.display();
  ob24.display();
  ob25.display();
  ob26.display();
  ob27.display();
  ob28.display();
  


  floor.display();

  b1.display();
  
  drawSprites();
}