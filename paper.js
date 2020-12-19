class Paper{
    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, r, options)
        this.r = r
        this.image = loadImage("paper.png")
        World.add(world, this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER)
        imageMode(CENTER)
        image(this.image, 0, 0, 50, 50)
        pop()
    }
}