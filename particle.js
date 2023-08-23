function Particle (x, y, r, fixed) {

    var options = {
        friction: 0,
        restitution: 0.95,
        isStatic: fixed

    }

    this.body= Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(0,130,255);

        ellipse(0, 0, this.r * 2);

        pop();

    }
}