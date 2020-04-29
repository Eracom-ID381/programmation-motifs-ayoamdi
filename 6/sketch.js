function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    colorMode(HSB, 255);

    noStroke();
    fill(0);
    //petit rond multicouleur//
    for (let x = 5; x < width; x = x + 25) {
        for (let y = 5; y < height; y = y + 25) {
            ellipse(x, y, 20, 20);
        }
    }

    fill(random(0, 255), 255, 255);
    //petit rond multicouleur//
    for (let x = 10; x < width; x = x + 25) {
        for (let y = 10; y < height; y = y + 25) {
            ellipse(x, y, 20, 20);
        }
    }
    //pls rond noir//
    fill(255, 255, 255, 60);
    for (let x1 = 10; x1 < width; x1 = x1 + 25) {
        for (let y1 = 10; y1 < height; y1 = y1 + 25) {
            for (let circleSize = 5; circleSize < 25; circleSize = circleSize + 5) {
                ellipse(x1, y1, circleSize);
            }
        }
    }

    //carré//
    fill(random(0, 255), 255, 255, 80);
    for (let x2 = 10; x2 < width; x2 = x2 + 100) {
        for (let y2 = 10; y2 < height; y2 = y2 + 100) {
            rect(x2, y2, 80, 80);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}