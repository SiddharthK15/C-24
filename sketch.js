const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground1;

function setup(){
    var canvas = createCanvas(1300, 600);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(1000,550,70,70);
    box2 = new Box(1200,550,70,70);
    box3 = new Box(1000,460,70,70);
    box4 = new Box(1200,460,70,70);
    box5 = new Box(1100, 355,70,70);

    ground1 = new Ground(650,575,1300, 30);

    pig1 = new Pig (1100,550);
    pig2 = new Pig (1100,460);

    log1 = new Log (1100, 470, 275, PI/2);
    log2 = new Log (1100, 375, 275, PI/2);
    log3 = new Log (1050, 370, 137, PI/6);
    log4 = new Log (1150, 370, 137, -PI/6);

    bird = new Bird(100, 200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground1.display();
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    bird.display();
   
}