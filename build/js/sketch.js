var Engine = Matter.Engine,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

var engine;
var world;

var boxes = [];
var balls = [];
var ground;

function setup() {
    //p5 init
    createCanvas(windowWidth, windowHeight);

    //matter init
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    //Creating custom bodies
    ground = new Boundary(world, width / 2, height, width, 100);

    boundary1 = new Boundary(world, 600, 300, 600, 40, PI / 8);
    boundary2 = new Boundary(world, 1100, 600, 600, 40, -PI / 8);
}

function mouseDragged() {
    balls.push(new Ball(world, mouseX, mouseY, random(5, 10)));
}

function keyPressed() {
    boxes.push(new Box(world, mouseX, mouseY, random(20, 80), random(20, 80)));
}

function draw() {
    background(64);

    // boxes.forEach(box => {
    //     box.show();
    // });

    for (let i = 0; i < balls.length; i++) {
        balls[i].show();
        if (balls[i].isOffScreen()) {
            balls[i].remove();
            balls.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
        if (boxes[i].isOffScreen()) {
            boxes[i].remove();
            boxes.splice(i, 1);
            i--;
        }
    }

    boundary1.show();
    boundary2.show();

    ground.show();
}