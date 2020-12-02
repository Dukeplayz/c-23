const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var engine,world,ground,ball



function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

box1 = new Box(200,350);
box2 = new Box(170,300);
grnd = new Ground();

}

function draw() {
  background(0); 
  Engine.update(engine);

  box1.display();
  box2.display();
  grnd.display();
}
