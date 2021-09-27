
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftSide;
var rightSide;


function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
	ground =new Ground(width/2,670,width,20);
	leftSide = new Ground(450, 600, 20, 120);
	rightSide = new Ground(750,600,20,120);
	//Create the Bodies Here.
	fill("white");
var ball_options={
	isStatic: false,
	restitution:0.3,
	friction:0,
	density: 1.2
}
ball = Bodies.circle(200,200,20,ball_options);
World.add(world, ball);
	//Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	//translate(CENTER, CENTER);
}


function draw() {
  rectMode(CENTER);
  background(0);
 ground.display();
 leftSide.display();
 rightSide.display();
 push();
  fill("brown");
  ellipse(ball.position.x,ball.position.y,20,20);
  pop();
 Engine.update(engine);
 //drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){

	Body.applyForce(ball, ball.position,{x: 50, y: -50});
	
	}
}

