function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    noStroke();
    colorMode(HSL), 255;

    fill(0, 0, random(0, 255), 200);
    for (let rectX8 = 50; rectX8 < width; rectX8 = rectX8 + 85) {
        for (let rectY8 = 10; rectY8 < height; rectY8 = rectY8 + 85) {
            rect(rectX8, rectY8, 45, 45);
        }
    }


    fill(0, 0, 60, 200);
    for (let rectX7 = 50; rectX7 < width; rectX7 = rectX7 + 80) {
        for (let rectY7 = 10; rectY7 < height; rectY7 = rectY7 + 80) {
            rect(rectX7, rectY7, 40, 40);
        }
    }



    fill(0, 0, 50, 200);
    for (let rectX6 = 50; rectX6 < width; rectX6 = rectX6 + 75) {
        for (let rectY6 = 10; rectY6 < height; rectY6 = rectY6 + 75) {
            rect(rectX6, rectY6, 35, 35);
        }
    }




    fill(0, 0, 40, 200);
    for (let rectX5 = 50; rectX5 < width; rectX5 = rectX5 + 70) {
        for (let rectY5 = 10; rectY5 < height; rectY5 = rectY5 + 70) {
            rect(rectX5, rectY5, 30, 30);
        }
    }

    fill(0, 0, 30, 200);
    for (let rectX4 = 50; rectX4 < width; rectX4 = rectX4 + 65) {
        for (let rectY4 = 10; rectY4 < height; rectY4 = rectY4 + 65) {
            rect(rectX4, rectY4, 25, 25);
        }
    }


    fill(0, 0, 20, 200);
    for (let rectX3 = 50; rectX3 < width; rectX3 = rectX3 + 60) {
        for (let rectY3 = 10; rectY3 < height; rectY3 = rectY3 + 60) {
            rect(rectX3, rectY3, 20, 20);
        }
    }

    fill(0, 0, 10, 200);
    for (let rectX = 50; rectX < width; rectX = rectX + 55) {
        for (let rectY = 10; rectY < height; rectY = rectY + 55) {
            rect(rectX, rectY, 15, 15);
        }
    }

    fill(0, 0, 0, 200);
    for (let rectX2 = 50; rectX2 < width; rectX2 = rectX2 + 50) {
        for (let rectY2 = 11; rectY2 < height; rectY2 = rectY2 + 50) {
            rect(rectX2, rectY2, 10, 10);
        }
    }




    //    let rectX2 = rectX;
    //    let rectY2 = rectY;
    //    while (rectY2 < height && rectX2 < width) {
    //        rect(rectX2, rectY2, 20, 20);
    //        rectX2 = rectX2 + 5;
    //        rectY2 = rectY2 + 5;
    //    }
}