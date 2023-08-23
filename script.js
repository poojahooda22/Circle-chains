//module aliases

var Engine = Matter.Engine
// var Render = Matter.Render
var World = Matter.World
var Bodies = Matter.Bodies;

var Constraint = Matter.Constraint;


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

    for (var x = 20; x < 380; x+= 40) {
        var p = new Particle(x, 100, 10);
        // var p1 = new Particle(200, 150, 10);
        particles.push(p);

     // particles.push(p1);

        //     var options = {
        //         bodyA: p.body,
        //         bodyB: p1.body,
        //         length: 50,
        //         stiffnes: 0.4
        //     }

        //   var constraint = Constraint.create(options);

        //   World.add(world, constraint);
    }
    
   

    boundaries.push(new Boundary(200, height, width, 30, 0));
    

    
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

    for(var i = 0; i < particles.length; i++) {
        particles[i].show();
    }

    // line(particles[0].body.position.x, particles[0].body.position.y, particles[1].body.position.x, particles[1].body.position.y);


    

}