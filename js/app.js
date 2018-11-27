let allEnemies = [];
const borderBounds = {
  leftX: 0,
  rightX: 505,
  topY: 0,
  bottomY: 606,
};

// Enemies our player must avoid
class Enemy {
  constructor(positionX, positionY, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = positionX;
    this.y = positionY * 73;
    this.width = 101;
    this.height = 80;
    this.speed = speed;
  }
  update(dt) {
    /* // Update the enemy's position, required method for game
        // Parameter: dt, a time delta between ticks
        Enemy.prototype.update = function(dt) {
            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
            // all computers.
        }; */

    return this.x >= 505 ? (this.x *= 0) : (this.x += this.speed) * dt;
  }
  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Character sprites
const sprites = {
  boy: 'images/char-boy.png',
  catGirl: 'images/char-cat-girl.png',
  hornGirl: 'images/char-horn-girl.png',
  pinkGirl: 'images/char-pink-girl.png',
  princess: 'images/char-princess-girl.png',
};

const { boy, catGirl, hornGirl, pinkGirl, princess } = sprites;

class Player {
  constructor(sprite, positionX, positionY) {
    this.x = positionX * 101;
    this.y = positionY * 80;
    this.sprite = sprite;
    this.initialX = positionX * 101;
    this.initialY = positionY * 80;
    this.width = 90;
    this.height = 101;
  }
  resetPlayerPos() {
    this.x = this.initialX;
    this.y = this.initialY;
    return;
  }
  update() {
    if (this.y < 68) {
      this.resetPlayerPos();
    }
    if (collides(player, enemy1)) {
      console.log('hit!!!!');
      this.resetPlayerPos();
    }
    if (collides(player, enemy2)) {
      console.log('hit!!!!');
      this.resetPlayerPos();
    }
    if (collides(player, enemy3)) {
      console.log('hit!!!!');
      this.resetPlayerPos();
    }
    if (collides(player, enemy4)) {
      console.log('hit!!!!');
      this.resetPlayerPos();
    }
    if (collides(player, enemy5)) {
      console.log('hit!!!!');
      this.resetPlayerPos();
    }
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput(allowedKeys) {
    if (allowedKeys === 'left' && this.x > 0) {
      this.x -= 101;
    } else if (allowedKeys === 'right' && this.x < 404) {
      this.x += 101;
    } else if (allowedKeys === 'up' && this.y > 0) {
      this.y -= 83;
    } else if (allowedKeys === 'down' && this.y < 400) {
      this.y += 83;
    }
    console.log(this.x, this.y);
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(hornGirl, 2, 5);
const enemy1 = new Enemy(0, 1, 0.5);
const enemy2 = new Enemy(0, 1, 1.7);
const enemy3 = new Enemy(0, 2, 3);
const enemy4 = new Enemy(0, 3, 2.45);
const enemy5 = new Enemy(0, 3, 3.75);
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);

// Collision function from https://stackoverflow.com/questions/13916966/adding-collision-detection-to-images-drawn-on-canvas
function collides(a, b) {
  if (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  )
    return true;
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
