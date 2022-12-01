class Ship {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 4;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        // document.addEventListener("keyup", this.keyup);

    }
    draw() {
        let img = document.getElementById('ship');
        let img2 = document.getElementById('enemy');
        this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        enemies.forEach((enemy) => {
            this.ctx.drawImage(img2, enemy.x, enemy.y, 100, 100);



        });

    }

    // shoot() {
    //     if (this.shootPressed){
    //         let speed = 5;
    //         let delay = 7;
    //         let damage = 1;
    //         let bulletX = this.x + this.width /2;
    //         let bulletY = this.y;
    //         this.bulletControl.shoot(bulletX, bulletY, speed, damage, delay);
    //     }
    // }

    move = (e) => {
        // this.ctx.clearRect(0, 0, this.width, this.height);
        if (e.code === "ArrowLeft") {
            this.x -= this.speed;
        }
        if (e.code === "ArrowRight") {
            this.x += this.speed;
        }
        this.ctx.clearRect(0, 0, 550, 600);
        this.draw();
        bullet.x = this.x
        bullet.y = this.y
    }



}