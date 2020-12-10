function setup() {
    createCanvas(innerWidth,innerHeight);
    btn = new button(100,100,50,25,"Click",16);
    txb = new textbox(btn.x+btn.w+20,btn.y,100,25,255,"input",16);
    background(20);
    state = 1;
}



function draw() {
    //mouseClicked()
    push();
    btn.display();
    btn.mouseon();
    txb.display();
    pop();
    //mousePressed();
    //Touched();
    // ellipse(x,y,60,60);
}


function mouseClicked(){
    if(btn.mouseon())
    {
        state = state * -1;
        if (state == -1)
            background(255);
        else 
            background(20);
    }
    
    if(txb.mouseon())
    {
              txb.getchar();
    }
}
