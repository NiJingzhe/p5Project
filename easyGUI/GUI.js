class widget{
    constructor(x_,y_,w_,h_){
        this.x = x_;
        this.y = y_;
        this.w = w_;
        this.h = h_;
    }
    
    mouseon(){
        if((mouseX>this.x-this.w/2)&&(mouseX<this.x+this.w/2)&&(mouseY>this.y-this.h/2)&&(mouseY<this.y+this.h/2))
            return true;
    }
}


class button extends widget
{
    constructor(x_,y_,w_,h_,text_,textsize_){
        super(x_,y_,w_,h_);
        this.text = text_;
        this.textsize = textsize_;
    }
  
    display(){        
        rectMode(CENTER); 
        fill(180);
        stroke(0);
        rect(this.x,this.y,this.w,this.h);
        fill(0);
        //  ellipse(this.x,this.y,30,30);
        textSize(this.textsize);
        textAlign(CENTER);
        text(this.text,this.x,this.y+ this.h/4);
        
        if((mouseX>this.x-this.w/2) && (mouseX<this.x+this.w/2) && (mouseY>this.y-this.h/2) && (mouseY<this.y+this.h/2))
        {
            if(mouseIsPressed)
            {
                fill(100);
            }
            else
            {
                fill(200);
            }
            stroke(255);
            rectMode(CENTER);
            rect(this.x,this.y,this.w,this.h);
            
            if(mouseIsPressed)
            {
                fill(255);
                stroke(0);
            }
            else
            {
                fill(80);
            }
            // ellipse(this.x,this.y,30,30);
            textSize(this.textsize);
            textAlign(CENTER);
            text(this.text,this.x,this.y + this.h/4);
            
        }
    }   
  
}

class textbox extends widget
{
    constructor(x_,y_,w_,h_,ml_,hint,tsize){
        super(x_,y_,w_,h_);
        this.maxlength = ml_;
        this.hint = hint;
        this.textsize = tsize;
        this.content = "";
    }
    
    display(){
        stroke(60);
        rectMode(CENTER);
        fill(240);
        rect(this.x,this.y,this.w,this.h);
        textSize(this.textsize);
        noStroke();
        fill(100);
        textAlign(CENTER);
        text(this.content,this.x ,this.y + this.h/4);
        if((mouseX>this.x-this.w/2) && (mouseX<this.x+this.w/2) && (mouseY>this.y-this.h/2) && (mouseY<this.y+this.h/2) && mouseIsPressed)
        {
            stroke(60);
            rectMode(CENTER);
            fill(240);
            rect(this.x,this.y,this.w,this.h);
            //this.getchar();
        }
    }
    
    getchar(){
            if (keyIsPressed)
            {
                print(this.content);
                this.content += key;
                textSize(this.textsize);
                fill(0);
                textAlign(CENTER);
                text(this.content,this.x,this.y); 
            }

    }
    
}