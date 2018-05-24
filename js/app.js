var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

function getRandomSpeed() {
    return Math.floor(Math.random() * (200 - 50) ) + 10;
}

function getRandomPosition() {
    var colArray = [60, 145, 230];
    let i = Math.floor((Math.random() * 3));
    return colArray[i];
}

var allEnemies = [];

for (i=0; i <= 4; i++) {
    allEnemies.push(new Enemy(-160, getRandomPosition(), getRandomSpeed()));
}

Enemy.prototype.update = function(dt) {
      this.x += (this.speed * dt);
      if (this.x > 500) {
        this.x = -200;
      }
};


allEnemies.forEach (function (){
    this.y = 100;
});


var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function(dt) {
    if (this.y < 50) {
      this.reset();
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function () {
    this.x = 200;
    this.y = 400;
};

Player.prototype.handleInput = function (keyCode) {
    switch (keyCode) {
        case 'up':
            if (this.y > 20) {
              this.y -= 83;
            }
            break;
        case 'right':
            if (this.x < 400) {
              this.x += 100;
            }
            break;
        case 'down':
            if (this.y < 400) {
              this.y += 83;
            }
            break;
        case 'left':
            if (this.x > 20) {
              this.x -= 100;
            }
            break;
    }
};

var player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
