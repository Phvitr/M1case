let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let ship = new Ship(canvas.width/2.2,canvas.height/1.3,80,80);
let enemies = [
    new Enemy(300, 100, 100,100),
    new Enemy(400, 100, 100,100),
    new Enemy(180, 100, 100,100),
    new Enemy(80, 100, 100,100),
    new Enemy(300, 25, 100,100),
    new Enemy(400, 25, 100,100),
    new Enemy(180, 25, 100,100),
    new Enemy(80, 25, 100,100),
]
let bullet = new Bullet()


// let bullet = new Bullet(300,400,10,20);
// bullet.x = (ship.x + ship.width/2) - bullet.width/2;
// bullet.y = ship.y - bullet.height;
// bullet.draw();

// let bullets =[];

function main() {
    function moveBullet() {
        bullet.draw();
        bullet.move();
        ship.draw();
    }

    document.addEventListener("keydown", ship.move);
    ship.draw();
    enemies.forEach((enemy) => {
        enemy.draw();
    });
    setInterval(moveBullet, 100)
    // bullet.draw();
    // bullet.createBullet();
    // bullet.shootBullet();
}

main();