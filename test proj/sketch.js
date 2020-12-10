function setup() {
    createCanvas(innerWidth,innerHeight);
    
    //ball.Ball(50);
}


var ball = new Ball(50);
var mousepos = new p5.Vector(p5.mouseX,p5.mouseY);

function draw() {
    mousepos.x = mouseX;
    mousepos.y = mouseY;
    background(0);
    ball.update(mousepos);
    ball.display();
}

function touchMoved() {
    return false;
}

function Ball(r) { 
    this.vel = new p5.Vector(0,0);
    this.acc = new p5.Vector(0,0);
    this.pos = new p5.Vector(innerWidth/2,innerHeight/2);
    this.r = r;
    
    this.display = function(){
        fill(255);
        ellipse(this.pos.x,this.pos.y,this.r,this.r);
    };
    
    this.update = function(mp){
        this.acc = this.pos.sub(mp).mult(-0.07);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    };

   
}