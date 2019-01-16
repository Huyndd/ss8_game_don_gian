function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
    }


    this.moveRight = function () {
        this.left += this.speed;
        console.log('left ' + this.left);
    }
    this.moveDown = function () {
        this.top += this.speed;
        console.log('down ' + this.left);
    }
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log('right ' + this.left);
    }
    this.moveUp = function () {
        this.top -= this.speed;
        console.log('up ' + this.left);
    }
}

var hero = new Hero('doraemon.png', 100, 100, 100, 50);

function start() {
    if (hero.left < window.innerWidth && hero.top === 100) {
        hero.moveRight();
    }
    if (hero.left > window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    }
    if (hero.top > window.innerHeight - hero.size && hero.left >0){
        hero.moveLeft()
    }
    if (hero.top < window.innerHeight && hero.left === 0){
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

start();