let allEnemies = [];
// Enemies our player must avoid
class Enemy {
  constructor(positionX, positionY, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = positionX * 101;
    this.y = positionY * 83;
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
    return this.speed * dt;
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
    this.sprite = sprite;
    this.x = positionX * 101;
    this.y = positionY * 83;
  }
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput() {}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(boy, 2, 5);
const enemy1 = new Enemy(0, 1, 0.5);
const enemy2 = new Enemy(0, 1, 0.25);
const enemy3 = new Enemy(0, 2, 1);
const enemy4 = new Enemy(0, 3, 0.45);
const enemy5 = new Enemy(0, 3, 0.75);
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
