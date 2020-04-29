function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    colorMode(HSB, 255)

    background(170, 255, 255);
    //triangle rouge//
    fill(0, 0, 0, 1);
    stroke(255, 255, 255);

    let x = 10;
    while (x < width) {
        triangle(x, height / 2 + 350, x, height / 2 + 350, width / 2, height / 2);
        x = x + 30;
    }
    //triangle rouge du haut//
    let x3 = 10;
    while (x3 < width) {
        triangle(x3, height / 2 - 350, x3, height / 2 - 350, width / 2, height / 2);
        x3 = x3 + 30;
    }
    //triangle orange//
    stroke(30, 255, 255);

    let x1 = 10;
    while (x1 < width) {
        triangle(x1, height / 2 - 150, x1, height / 2 + 150, width / 2, height / 2);
        x1 = x1 + 30;
    }


    //triangle bleu droite//
    stroke(120, 255, 255);

    let x4 = 30;
    while (x4 < width) {
        triangle(width / 2 + x4, height - 10, width / 2 + x4 + 30, height - 10, width, 0);
        x4 = x4 + 60;
    }

    //triangle bleu gauche//

    let x5 = 30;
    while (x5 < width) {
        triangle(width / 2 - x5, height - 10, width / 2 - x5 + 30, height - 10, 0, 0);
        x5 = x5 + 60;
    }


}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}