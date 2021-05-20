class Box{
constructer(x,y,width,hiegth){
    var options={
        isStatic:false
    }
    this.body = Bodies.rectangle(x,y,width,hiegth)
    this.width = width;
    this.hiegth = hiegth;

    World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
};