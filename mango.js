class mango {
    constructor(x, y, width, height) { 
      
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.mango_image = loadImage("mango.png");
      World.add(world, this.mango_image);
    }
    show() {
      
      push();
      translate(this.x, this.y);
      imageMode(CENTER);
      image(this.mango_image, 0, 0, this.width, this.height);
      pop();
      noFill();
    }
  }