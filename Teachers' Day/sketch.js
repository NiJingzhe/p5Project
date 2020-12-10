var rightparticle;
var leftparticle;
var sentence;
var i;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255);
    rightparticle = new ParticleSystem(createVector(width / 2, 0));

    sentence = new Array();
    sentence[0] = "Happy Teachers' Day!";
    sentence[1] = "教师节快乐!";
    sentence[2] = "F = ma";
    sentence[3] = "祝李老师教师节快乐！";
    sentence[4] = "祝严老师教师节快乐！";
    sentence[5] = "祝沈老师教师节快乐！";
    sentence[6] = "祝爽姐教师节快乐！";
    sentence[7] = "";
    sentence[8] = "祝倪老师教师节快乐！";
    sentence[9] = "祝刘佳姐姐教师节快乐！";
    sentence[10] = "祝高老师教师节快乐！";
    sentence[11] = "祝薄老师教师节快乐！";
    sentence[12] = "sin(A+B)=sin(A)cos(B)+cos(A)sin(B)";



    i = 0;
}

function draw() {
    background(255);
    i++;
    if (i == 5) {
        rightparticle.addParticle(sentence[parseInt(Math.random() * 13)], createVector(random(50, 210), random(20, 210)));
        i = 0;
    }
    rightparticle.run();
    textAlign(CENTER);
    stroke(0);
    strokeWeight(8);
    fill(255);
    textSize(80);
    text("HAPPY TEACHERS' DAY !", width / 2, height / 2);

}



var Particle = function(position, text, color) {
    this.acceleration = createVector(0, 0.01);
    this.velocity = createVector(random(-3, 3), random(-2, 0));
    this.position = position.copy();
    this.lifespan = 2000;
    this.text = text;
    this.color = color;
};

Particle.prototype.run = function() {
    this.update();
    this.display();
};

// Method to update position
Particle.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
    noStroke();
    strokeWeight(0);
    fill(random(20, 200), random(20, 200), 150, this.lifespan);
    //ellipse(this.position.x, this.position.y, 10, 10);
    textAlign(CENTER);
    fill(20, this.color.x, this.color.y, this.lifespan / 6);
    textSize(25);
    text(this.text, this.position.x, this.position.y);
    //rotate(random(-3 / 2, 3 / 2));
};

// Is the particle still useful?
Particle.prototype.isDead = function() {
    if (this.lifespan < 0) {
        return true;
    } else {
        return false;
    }
};

var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function(sentence, color) {
    this.particles.push(new Particle(this.origin, sentence, color));
};

ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length - 1; i >= 0; i--) {
        var p = this.particles[i];
        p.run();
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }
    }
};