function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    rectMode(CENTER);
    //let x = 10;


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

    ellipseMode(CENTER);
    //noStroke();
    fill(255);
    for (let circleSize = 0; circleSize < width; circleSize = circleSize + 50) {

        ellipse(width / 2 - 15, height / 2 - 15, circleSize)


    }
    //for (let gradient = 0; gradient < 499; gradient = gradient + 50)

    //fill(500);
    //ellipse(width / 2 - 15, height / 2 - 15, 500, 500);

    //fill(150);
    //ellipse(width / 2 - 15, height / 2 - 15, 350, 350);

    //fill(100);
    //ellipse(width / 2 - 15, height / 2 - 15, 200, 200);

    //fill(50);
    //ellipse(width / 2 - 15, height / 2 - 15, 40, 40);

}



function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}