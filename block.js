class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.image=loadImage("block.png")
        this.height = height;
        World.add(world, this.body);
        this.v=255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if (this.body.speed<3){
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
        }
        else {
        World.remove(world, this.body);
        push()
        this.v=this.v-5
        tint(255,this.v)
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
        pop()
        }
      }
}
