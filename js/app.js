'use strict';
// DOM interaction variables
let allEnemies = []; // enemy array for resource loading
let createModalWin = document.createElement('div');
let createModalOverlay = document.createElement('div');
createModalWin.classList.add('modalWin', 'hide');
createModalWin.setAttribute('id', 'modalWin');
createModalWin.innerHTML = `<h1>Congratulations!</h1><p>You won!!</p>`;
createModalOverlay.classList.add('modalOverlay', 'hide');
createModalOverlay.setAttribute('id', 'modalOverlay');
document.body.appendChild(createModalOverlay);
document.body.appendChild(createModalWin);

// Enemies our player must avoid
class Enemy {
  constructor() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = this.getRandomInt(1, 3) * 73;
    this.width = 101;
    this.height = 80;
    this.speed = this.getRandom(1, 4);
  }
  getRandomInt(min, max) {
    // Random integer method
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getRandom(min, max) {
    // Random number method (with decimals)
    return Math.random() * (max - min) + min;
  }
  update(dt) {
    /* // Update the enemy's position, required method for game
        // Parameter: dt, a time delta between ticks
        Enemy.prototype.update = function(dt) {
            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
            // all computers.
        }; */

    return this.x >= 505
      ? ((this.x *= 0), (this.y = this.getRandomInt(1, 3) * 73))
      : (this.x += this.speed) * dt;
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
// **TODO** Implement character selection
const { boy, catGirl, hornGirl, pinkGirl, princess } = sprites;

class Player {
  constructor(sprite, positionX, positionY) {
    this.x = positionX * 101;
    this.y = positionY * 80;
    this.sprite = sprite;
    this.initialX = positionX * 101;
    this.initialY = positionY * 80;
    this.width = 50;
    this.height = 101;
    this.score = 0;
  }
  resetPlayerPos() {
    this.x = this.initialX;
    this.y = this.initialY;
    return;
  }
  update() {
    if (this.y < 68) {
      this.score++; // **TODO** : add score count to board and win conditions
      console.log(this.score);
      this.resetPlayerPos();
      if (this.score === 5) {
        this.win();
      }
    }
    if (collides(player, enemy1)) {
      this.resetPlayerPos();
    }
    if (collides(player, enemy2)) {
      this.resetPlayerPos();
    }
    if (collides(player, enemy3)) {
      this.resetPlayerPos();
    }
    if (collides(player, enemy4)) {
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
  }
  win() {
    let board = document.querySelector('canvas');
    board.classList.toggle('hide');
    let modalOverlay = document.querySelector('#modalOverlay');
    let modalWin = document.querySelector('#modalWin');
    modalOverlay.classList.toggle('hide');
    modalWin.classList.toggle('hide');
    // modalWin.addEventListener('click', () => this.resetGame() )
  }
  resetGame() {
    this.score = 0;
    allEnemies = [];
    board.classList.toggle('hide');
    let modalOverlay = document.querySelector('#modalOverlay');
    let modalWin = document.querySelector('#modalWin');
    modalOverlay.classList.toggle('hide');
    modalWin.classList.toggle('hide');
    startGame();
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player(hornGirl, 2, 5);
const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();
const enemy4 = new Enemy();
allEnemies.push(enemy1, enemy2, enemy3, enemy4);

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
