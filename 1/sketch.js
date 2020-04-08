function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    fill(0)
    ellipse(width / 2, height / 2, 500);

    fill(255);
    ellipse(width / 2, height / 2 + 60, 210, 180)

    fill(0)
    ellipse(width / 2, height / 2 + 20, 220);

    fill(255)
    ellipse(width / 2 + 80, height / 2 - 50, 50);

    fill(255)
    ellipse(width / 2 - 80, height / 2 - 50, 50);

    fill(0)
    ellipse(width / 2 + 80, height / 2 - 70, 200, 50);

    fill(0)
    ellipse(width / 2 - 80, height / 2 - 70, 200, 50);



    fill(0);
    noStroke();
    for (let x = 10; x < width; x = x + 20) {
        for (let y = 10; y < height; y = y + 20) {
            ellipse(x, y, random(5, 25));
        }

    }


}




function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}