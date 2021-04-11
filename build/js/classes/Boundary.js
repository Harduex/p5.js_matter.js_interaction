class Boundary {
    constructor(world, x, y, w, h, a=0) {
        var options = {
            friction: 0,
            restitution: 0.6,
            isStatic: true,
            angle: a
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        Composite.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke(160);
        fill(100);
        rectMode(CENTER);
        rect(0, 0, this.w-1, this.h-1);
        pop();
    }
}