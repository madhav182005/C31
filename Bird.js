class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.path = []
    this.smokeImage = loadImage("sprites/smoke.png"); 
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){ 
      this.path.push([this.body.position.x, this.body.position.y])
    }
    for(var i=0;i<this.path.lenght;i=i+1){
      console.log("image"); 
      image (this.smokeImage,this.path[i][0],this.path[i][1])
    }
  }
}
