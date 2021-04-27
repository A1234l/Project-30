class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage('block.png');
    }
    display(){
      if(this.body.speed<3){
        push();
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
        pop();
      }
      else{
        push();
        tint(255, this.transparency);
        // imageMode(CENTER);
        // image(this.image,pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y);
        this.transparency = this.transparency-5;
        pop();
        World.remove(world,this.body);
        console.log(this.transparency)
      }
    }
}