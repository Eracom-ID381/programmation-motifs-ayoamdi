function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    colorMode(HSB, 255);
    //cercles du haut//
    stroke(170, 255, 255);
    fill(0, 255, 255);
    for (let eliX = 20; eliX < width; eliX = eliX + 30) {
        for (eliY = 0; eliY < height; eliY = eliY + 30) {
            ellipse(eliX, eliY, 50, 50);
        }
    }
    //cercle rouge//

    fill(random(0, 255), 255, 255);
    ellipse(width / 2, height - 500, 400, 400)

    //cercles du bas//
    stroke(0, 255, 255);
    fill(170, 255, 255);
    for (let eliX = 20; eliX < width; eliX = eliX + 30) {
        for (eliY = height / 2; eliY < height; eliY = eliY + 30) {
            ellipse(eliX, eliY, 50, 50);
        }
    }

    //ligne bleu//
    stroke(170, 255, 255);
    for (let lineX1 = 0; lineX1 < width; lineX1 = lineX1 + 30) {
        line(lineX1, random(0, 1060), 0, 0);
    }
    //ligne rouge//
    stroke(0, 255, 255);
    for (let lineX2 = 1000; lineX2 < width; lineX2 = lineX2 + 30) {
        line(0, random(0, 1000), lineX2, random(0, 1000));
    }

}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}