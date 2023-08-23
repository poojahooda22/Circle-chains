//module aliases

var Engine = Matter.Engine
// var Render = Matter.Render
var World = Matter.World
var Bodies = Matter.Bodies;

var Constraint = Matter.Constraint;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;


var engine;
var world;
// var circles = [];
var boundaries = [];
var particles = [];

var ground;
var mConstraint;

function setup() {
    var canvas = createCanvas(1200, 1200);
    engine = Engine.create();
    world = engine.world;
    // Engine.run(engine); 
    
    // boundaries.push(new Boundary(150, 100, width * 0.3, 20, 0.3));
    // boundaries.push(new Boundary(250, 400, width * 0.6, 20, -0.3));

    var prev = null;
    for (var x = 200; x < 400; x+= 20) {
        var fixed = false;
        if(!prev) {
            fixed = true;
        }
        var p = new Particle(x, 100, 10, fixed);
        // var p1 = new Particle(x, 100, 10, fixed);
        // var p1 = new Particle(200, 150, 10);
        particles.push(p);
        // particles.push(p1);
        if (prev) {
            var options = {
                bodyA: p.body,
                bodyB: prev.body,
                length: 30,
                stiffness: 0.4
            }
          var constraint = Constraint.create(options);
          World.add(world, constraint);
        } 
          prev = p;
    }

    var prev = null;
    for (var x = 400; x < 600; x+= 20) {
        var fixed = false;
        if(!prev) {
            fixed = true;
        }
        var p1 = new Particle(x, 100, 10, fixed);
        // var p1 = new Particle(x, 100, 10, fixed);
        // var p1 = new Particle(200, 150, 10);
        particles.push(p1);
        // particles.push(p1);
        if (prev) {
            var options = {
                bodyA: p1.body,
                bodyB: prev.body,
                length: 30,
                stiffness: 0.4
            }
          var constraint = Constraint.create(options);
          World.add(world, constraint);
        } 
          prev = p1;
    }
    var prev = null;
    for (var x = 600; x < 800; x+= 20) {
        var fixed = false;
        if(!prev) {
            fixed = true;
        }
        var p2 = new Particle(x, 100, 10, fixed);
        // var p1 = new Particle(x, 100, 10, fixed);
        // var p1 = new Particle(200, 150, 10);
        particles.push(p2);
        // particles.push(p1);
        if (prev) {
            var options = {
                bodyA: p2.body,
                bodyB: prev.body,
                length: 30,
                stiffness: 0.4
            }
          var constraint = Constraint.create(options);
          World.add(world, constraint);
        } 
          prev = p2;
    }
    // boundaries.push(new Boundary(200, height, width, 30, 0));
  
    var canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    var options = {
        mouse: canvasmouse   
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);   
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

    if(mConstraint.body) {
        var pos = mConstraint.body.position;
        fill(0);
        noStroke();
        ellipse(pos.x, pos.y, 20, 20);
    }

    

}