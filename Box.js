class Box{
   constructor (x,y,width,height){
    var box_option = {
       restitution : 0.8,
       dencity : 1.0,
       friction : 1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,box_option);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
    }  
   display () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(24,224,200);
    rect(0,0,this.width,this.height);
    pop ();
   }
}