let music,amplitude;

function preload() {
  soundFormats('mp3', 'ogg');
  music = loadSound('bigfatcat.mp3');
}

function setup(){
    createCanvas(innerWidth,innerHeight); 
    background(0);
    amplitude = new p5.Amplitude();
}

function draw(){
    let level = amplitude.getLevel();
    let size = map(level,0,1,0,200);
    ellipse(width/2,height/2,size);
}

function mousePressed(){
    music.play();
}