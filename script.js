var y1=0;
var y2=200;
var x=100;
var y=200;
var dx=1;
var dy=1;
var s=0.9;

var r=20;
var g=50;
var b=230;
var e=250;
var f=0;
var g=0;


function setup() { 
  createCanvas(600, 400);
  
  
  e = random (250);
  f = random (250);
  g = random (250);

}

function draw() { 
  background (r,g,b);
 
  line (300,0,300,400);
  strokeWeight(3);
  fill(250, 250, 80); 
  rect( 10,y1,20,100);  
  rect( 565,y2,20,100);
  
  fill (e,f,g);
  rect(x,y, 15, 15);

controls();
  boundaries();
    
    if(x < 20 && y > y1 && y < y1 + 120)
    {
        dx=-dx;
        
        if (s === 1.1) {
          s = 0.9;
        } else {
          s = 1.1;
        }
    }
    // ball doesnt got through the paddals
    if(x+20>570 && y > y2 && y < y2 + 120)
    {
        dx=-dx; 
        
        if (s === 1.1) {
          s = 0.9;
        } else {
          s = 1.1;
        }
      }
//   ball movement
  x=x+15*dx*s;
  y=y+15*dy*(1-s);
  
    if (y > 300 || y<10) {
    dy=-dy;
    
  }
  

    
}
function controls(){
    if (keyIsDown(65))
    {
    if(y1<260) {
    	y1=y1+20;
    }
    }
  
  if (keyIsDown(81))
    {
     if(y1>0) {
    y1=y1-15;
    }
    }

    if(keyIsDown(DOWN_ARROW))
    {
        if(y2<260) {
    	y2=y2+15;
        }
        
    }
    
    if(keyIsDown(UP_ARROW))
    {
        if(y2>0) 
        {
            y2=y2-20;
        }
    }
    }
    function boundaries(){
         // TODO: check the top boundary
    if(y <= 0)
    {
        dy = dy *-1;
    }


    // TODO: check the left boundary
     if(x <= 45)
    {
      dx = dx*-1; 
    }



    // TODO: check the right boundary
    if(x >= width)
    {
        dx = dx*-1;
    }
    
    if(x < 20 && y > y1 && y < y1 + 120)
    {
        dx=-dx;
        
        if (s === 1.1) {
          s = 0.9;
        } else {
          s = 1.1;
        }
    }
        }