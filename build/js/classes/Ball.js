class Ball {
    constructor(world, x, y, r) {
        let options = {
            friction: 0,
            restitution: 0.6
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        Composite.add(world, this.body);
    }

    isOffScreen() {
        let pos = this.body.position;
        return (pos.y > height + 100);
    }

    remove() {
        Composite.remove(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke(210);
        fill(80);
        rectMode(CENTER);
        ellipse(0, 0, (this.r * 2) - 1);
        pop();
    }
}