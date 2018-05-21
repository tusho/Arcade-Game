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
  this.y = 83*this.row;
};

var allEnemies = [];
allEnemies.push(Enemy);

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 5;
    this.y = 5;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var player = new Player();
var enemy = new Enemy();
