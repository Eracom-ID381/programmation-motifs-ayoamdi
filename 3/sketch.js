function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    background(random(250, 255));

    //cercles du centres//
    fill(random(240, 250));
    ellipse(width / 2 - 15, height / 2 - 15, 1500, 1500);

    fill(random(200, 240));
    ellipse(width / 2 - 15, height / 2 - 15, 950, 950);

    fill(random(160, 200));
    ellipse(width / 2 - 15, height / 2 - 15, 750, 750);

    fill(random(120, 160));
    ellipse(width / 2 - 15, height / 2 - 15, 550, 550);

    fill(random(40, 80));
    ellipse(width / 2 - 15, height / 2 - 15, 350, 350);

    fill(random(20, 40));
    ellipse(width / 2 - 15, height / 2 - 15, 200, 200);

    fill(random(0, 20));
    ellipse(width / 2 - 15, height / 2 - 15, 40, 40);



    rectMode(CENTER);
    //rect base//
    fill(200);
    for (let rectX = 20; rectX < width; rectX = rectX + 50) {
        for (let rectY = 20; rectY < height; rectY = rectY + 50)
            rect(rectX, rectY, 25, 25)
    }

    //petit rect noir gauche haut//
    fill(0);
    for (let x = 10; x < width / 2; x = x + 50) {
        for (let y = 20; y < height / 2; y = y + 50) {
            rect(x, y, 5, 25);
        }
    }

    //petit rect noir droite haut//
    for (let x1 = width / 2 + 10; x1 < width; x1 = x1 + 50) {
        for (let y1 = 10; y1 < height / 2; y1 = y1 + 50) {
            rect(x1, y1, 25, 5)
        }
    }

    //petit rect bas gauche//
    for (let x2 = 20; x2 < width / 2; x2 = x2 + 50) {
        for (let y2 = 25 + height / 2; y2 < height / 2 + height / 2; y2 = y2 + 50) {
            rect(x2, y2, 25, 5);
        }
    }

    //petit rect bas droite//
    for (let x3 = width / 2 + 20; x3 < width / 2 + width / 2; x3 = x3 + 50) {
        for (let y3 = 12 + height / 2; y3 < height / 2 + height / 2; y3 = y3 + 50)
            rect(x3, y3, 5, 25);
    }

}



function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}