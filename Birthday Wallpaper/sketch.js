var rightparticle;
var leftparticle;
var sentence;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    rightparticle = new ParticleSystem(createVector(width, 0));
    leftparticle = new ParticleSystem(createVector(0, 0));

    sentence = "Happy Birthday to 周昊!"
}

function draw() {
    background(0);
    rightparticle.addParticle();
    rightparticle.run();

    leftparticle.addParticle()
    leftparticle.run()

    //显示寿星信息
    textAlign(CENTER);
    fill(255, 51, 0);
    textSize(100);
    text(sentence, width / 2, height / 3);

    //绘制蛋糕代码
    rectMode(CENTER);
    //更改蛋糕颜色
    fill(255, 255, 153);
    //改rgb即可
    rect(width / 2, height / 8 * 7, 400, 180);
    rect(width / 2, height / 8 * 6, 300, 160);
    //设置年龄
    fill(250, 50, 50);
    textSize(200);
    textAlign(CENTER);
    text("17", width / 2, height / 8 * 5 + 30);
    //更改此处的数字即可

    //闪烁的蛋糕侧面装饰
    fill(random(20, 200), random(20, 200), 150);
    for (let i = width / 2 - 190; i <= width / 2 + 190; i += 20) {
        ellipse(i, height / 8 * 7 - 60, 10);
    }
    for (let i = width / 2 - 145; i <= width / 2 + 145; i += 20) {
        ellipse(i, height / 8 * 6 - 50, 10);
    }

    //每层蛋糕上部分界
    fill(255, 102, 204);
    for (let i = width / 2 - 190; i <= width / 2 + 190; i += 10) {
        ellipse(i, height / 8 * 7 - 90, 300 / 15);
    }
    for (let i = width / 2 - 145; i <= width / 2 + 145; i += 10) {
        ellipse(i, height / 8 * 6 - 80, 15);
    }

    //其余装饰可自行添加

    //绘制蛋糕代码结束
}



var Particle = function(position) {
    this.acceleration = createVector(0, 0.03);
    this.velocity = createVector(random(-2, 2), random(-2, 0));
    this.position = position.copy();
    this.lifespan = 500;
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
    ellipse(this.position.x, this.position.y, 10, 10);
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

ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
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