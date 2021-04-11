class Box {
    constructor(world, x, y, w, h) {
        var options = {
            friction: 0.5,
            restitution: 0.6
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
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
        rect(0, 0, this.w-1, this.h-1);
        pop();
    }
}