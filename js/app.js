let Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

function getRandomSpeed() {
    return Math.floor(Math.random() * (200 - 50) ) + 50;
}

function getRandomPosition() {
    const colArray = [60, 145, 230];
    let i = Math.floor((Math.random() * 3));
    return colArray[i];
}

let allEnemies = [];

for (i=0; i <= 4; i++) {
    allEnemies.push(new Enemy(-160, getRandomPosition(), getRandomSpeed()));
}

Enemy.prototype.update = function(dt) {
      this.x += (this.speed * dt);
      if (this.x > 500) {
        this.x = -150;
      }
      checkCollisions();
};


allEnemies.forEach (function (){
    this.y = 100;
});


let Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function(dt) {
    if (this.y < 50) {
      gameFinish();
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

let player = new Player();

function checkCollisions() {
  allEnemies.forEach(function(enemy) {
      if ((enemy.x > (player.x - 70) & enemy.x < (player.x + 70)) && (enemy.y > (player.y - 20) & enemy.y < (player.y + 20))) {
        player.reset();
      }
  });
}

function enemyReset() {
  allEnemies.forEach(function(enemy) {
      enemy.x = -150;
  });
}

function gameFinish() {
  modal.style.display = "block";
}

document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


const modal = document.getElementById('myModal');
const replayButton = document.getElementsByTagName('button')[0];

replayButton.addEventListener('click', function() {
  modal.style.display = "none";
  player.reset();
  enemyReset();
})
