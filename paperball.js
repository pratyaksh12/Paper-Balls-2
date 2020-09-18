class paperball {
    constructor(x, y) {
      var options = {
        'density':1.2,
        'friction': 0.5,
        'restitution':0.6
      };
      this.body = Bodies.rectangle(x, y, 35, 35, options);
      this.width = 35;
      this.height = 35;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('pink')
      fill('green')
      rectMode(CENTER)
      imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height);
      pop();
    };
  };
  