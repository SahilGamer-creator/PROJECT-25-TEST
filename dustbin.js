class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     this.image = loadImage("sprites/dustbingreen.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("silver");
      fill("gold");
      rect(0, 0, this.width, this.height);
      imageMode(CENTER);
			image(this.image, 0, 0, 160,400);
      pop();
    }
  };