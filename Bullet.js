class Bullet {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.image = document.getElementById(("bullet"))
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y - 40, 80, 80)
    }
    move() {
        this.y -= 10
        this.ctx.clearRect(this.x, this.y+10, 80, 80)
    }
    // update(x,y){
    //     this.x = x;
    //     this.y = y;
    // }
    // createBullet(){
    //     for (let i = 0; i < 5; i++) {
    //         let bullet = new Bullet(300,400,20,30);
    //         bullet.update(ship.x + ship.width/2 -ship.width/2, ship.y - bullet.height);
    //         bullets.push(bullet);
    //     }
    // }
    // move(){
    //     this.ctx.clearRect(this.x, this.y, this.width, this.height);
    //     this.y -= 25;
    //     this.draw();
    // }
    // shootBullet(){
    //     for (let i = 0; i < bullets.length; i++) {
    //         bullets[i].y -= bullets[i].height - 20;
    //         bullets[i].move();
    //
    //     }
    // }

    // collide(box) {
    //     if (
    //         this.x < box.x + box.width && this.x + this.width > box.x
    //         && this.y < box.y + box.height && this.y + this.height > box.y
    //     ) {
    //         box.takedamage(this.damage);
    //         return true;
    //     }
    //     return false;
    // }


}