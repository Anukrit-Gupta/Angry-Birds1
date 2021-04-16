class Ground {
    constructor ()  {
        var ground_option = {
            isStatic:true
          }
          this.body = Bodies.rectangle(600,390,1200,20,ground_option);
          World.add(world,this.body);
        
    }
    display() {
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,1200,20);
    }
}