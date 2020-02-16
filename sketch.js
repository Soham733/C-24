const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1300,550);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,530,60,50);
    box2 = new Box(1000,530,60,50);
    box3=new Box(800,400,60,50);
    box4=new Box(1000,400,60,50);
    box5=new Box(900,350,60,50);
    ground = new Ground(650,height,1300,20)
    pig=new Pig(900,530);
    pig1=new Pig(900,400);
    log1=new log(900,450,270,PI/2);
    log2=new log(900,350,270,PI/2);
    log3=new log(810,300,135,PI/7);
    log4=new log(950,300,135,-PI/7);
    bird=new Bird(100,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}