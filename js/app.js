var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = 5;
    this.y = 5;
    this.speed = 225;
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.update = function(dt) {
  this.x = (this.x + this.speed);
  this.y = 83 * this.row;
};

var allEnemies = [];
for (i=0; i <= 6; i++) {
  allEnemies.push(new Enemy());
}


var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 5;
    this.y = 5;
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var player = new Player();
var enemy = new Enemy();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
