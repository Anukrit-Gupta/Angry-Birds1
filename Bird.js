class Bird{
    constructor (x,y,){
     var box_option = {
        restitution : 0.8,
        dencity : 1.0,
        friction : 1.0
       }
       this.body = Bodies.rectangle(x,y,50,50,box_option);
       World.add(world,this.body);
       this.width = 50;
       this.height = 50;
     }  
    display () {
     var pos = this.body.position;
     var angle = this.body.angle;
     pos.x = mouseX;
     pos.y = mouseY;
     push ();
     translate (pos.x,pos.y);
     rotate (angle);
     rectMode(CENTER);
     strokeWeight(4);
     stroke("black");
     fill("red");
     rect(0,0,this.width,this.height);
     pop ();
    }
 }