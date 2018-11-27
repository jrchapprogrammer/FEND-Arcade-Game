let allEnemies = [];
const borderBounds = {
  leftX: 0,
  rightX: 505,
  topY: 0,
  bottomY: 606,
};
class Sprite {
  constructor(positionX, positionY) {
    this.x = positionX * 101;
    this.y = positionY * 83;
  }
}
// Enemies our player must avoid
class Enemy extends Sprite {
  constructor(positionX, positionY, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    super(positionX, positionY);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
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

class Player extends Sprite {
  constructor(sprite, positionX, positionY) {
    super(positionX, positionY);
    this.sprite = sprite;
  }
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput(allowedKeys) {
    if (allowedKeys[e.keyCode] === 37) {
      this.x -= 1;
      console.log('left');
    }
    if (allowedKeys[e.keyCode] === 39) {
      this.x += 1;
      console.log('right');
    }
    if (allowedKeys[e.keyCode] === 38) {
      this.y -= 1;
      console.log('up');
    }
    if (allowedKeys[e.keyCode] === 40) {
      this.y += 1;
      console.log('down');
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(boy, 2, 5);
const enemy1 = new Enemy(0, 1, 0.5);
const enemy2 = new Enemy(0, 1, 1.25);
const enemy3 = new Enemy(0, 2, 3);
const enemy4 = new Enemy(0, 3, 2.45);
const enemy5 = new Enemy(0, 3, 4.5);
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);

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
