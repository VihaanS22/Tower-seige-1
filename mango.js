class Mango {
    constructor(x, y, width, height) {
      var options = {
        
        'restitution':0.8,
          'friction':1.0,
          'density' : 1.0
          
      }
      
  
      this.x = x
      this.y = y
      this.height = height
      this.widht = width
      
 this.image = loadImage("box1.png");
      this.body = Matter.Bodies.rectangle(x, y, width,height, options);
      

      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
     translate(pos.x, pos.y);
     
     
     //rectMode(CENTER);
   
     //fill("white");
     //rect(pos.x, pos.y, this.width, this.height);
     imageMode(CENTER);
      image(this.image, 0, 0, this.height, this.height,  this.width, this.width);
     pop();
    }
  };
 
  