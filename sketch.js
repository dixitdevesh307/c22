const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var Ground_options ={
        isStatic: true
    }

   Ground= Bodies.rectangle(200,390,400,100,Ground_options);
    World.add(world,Ground);

   var ball_options ={
        restituion: 1.5
    }

   ball= Bodies.rectangle(200,200,50,50,ball_options);
    World.add(world,ball ); 


    console.log(Ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(Ground.position.x,Ground.position.y,400,20);
    ellipse(CENTER);
    ellipse(ball.position.x,ball.position.y,50,50);
}
