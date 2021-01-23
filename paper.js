class PaperClass {
    constructor(x, y, diameter, width, height) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.ellipse(x, y, diameter, width, height);
        this.width = width;
        this.height=height;
        this.diameter=diameter;
        World.add(world, this.body);
    }
    display(){
        var diameter = this.body.diameter;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(diameter);
        pop();
    }
}