class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':10,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 40,35, options);
      this.width =40;
      this.height = 35;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x=mouseX;
      pos.y=mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      strokeWeight(5);
      stroke("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }