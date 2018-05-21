var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = 5;
    this.y = 5;
    this.speed = 225;
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
