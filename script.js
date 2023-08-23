//module aliases

var Engine = Matter.Engine
// var Render = Matter.Render
var World = Matter.World
var Bodies = Matter.Bodies;


var engine;
var world;
// var circles = [];
var boundaries = [];
var particles = [];

var ground;

function setup() {
    createCanvas(1200, 1200);
    engine = Engine.create();
    world = engine.world;
    // Engine.run(engine); 
    
    // boundaries.push(new Boundary(150, 100, width * 0.3, 20, 0.3));
    // boundaries.push(new Boundary(250, 400, width * 0.6, 20, -0.3));

    boundaries.push(new Boundary(200, height, width, 50, 0));
    

    
    // World.add(world, ground);   
}

// function mouseDragged() {
//     circles.push(new Circle(mouseX, mouseY, 30));
// }

function draw() {
    background(255);
    Engine.update(engine);
    
    // for(var i = 0; i < circles.length; i++) {
    //     circles[i].show();
    // }

    for(var i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }


    

}