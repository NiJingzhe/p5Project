var cols, rows;
var scl = 25;
var flying = 0;

var terrain;
var myFont;

function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);

    cols = width / scl;
    rows = height / scl;
    terrain = new Array();
    for (let i = 0; i < cols; i++) {
        terrain[i] = new Array();
    }

}

function draw() {

    background(0);

    flying -= 0.05;
    var yoff = flying;
    for (let y = 0; y < rows; y++) {
        var xoff = 0;
        for (let x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -50, 50);
            xoff += 0.3;
        }
        yoff += 0.3;
    }

    translate(-width / 2, -height / 2);
    rotateX(PI / 2);
    translate(0, -height / 2);
    stroke(0, 255, 255);
    strokeWeight(1);
    fill(0);
    for (let y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y] * 1 - displayHeight * 0.6);
            vertex(x * scl, (y + 1) * scl, terrain[x][y] * 1 - displayHeight * 0.6);
        }
        endShape();
    }

}

function format(str) {
    if (parseInt(str) < 10)
        return "0" + str
    else
        return str;
}