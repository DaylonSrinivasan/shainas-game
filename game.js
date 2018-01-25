var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


class Player {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.width = 10;
    this.height = 10;
    this.movingLeft = false;
    this.movingRight = false;
    this.movingUp = false;
    this.movingDown = false;
    this.img = document.getElementById("player_img");
  }
}

var player = new Player();


setInterval(draw, 10); //call "draw" function every 10 ms

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handlePlayerMove();
  ctx.drawImage(player.img, 0, 0, player.img.width, player.img.height,
    player.x, player.y, player.img.width*.1, player.img.height*.1);

}

document.addEventListener("keypress", function(e){
  switch(e.key){
    case 'a':
      player.movingLeft = true;
      break;
    case 'w':
      player.movingUp = true;
      break;
    case 's':
      player.movingDown = true;
      break;
    case 'd':
      player.movingRight = true;
      break;
  }
});

document.addEventListener("keyup", function(e) {
  switch(e.key){
    case 'a':
      player.movingLeft = false;
      break;
    case 'w':
      player.movingUp = false;
      break;
    case 's':
      player.movingDown = false;
      break;
    case 'd':
      player.movingRight = false;
      break;
  }
});

function handlePlayerMove() {
  if (player.movingLeft) player.x -= 5;
  if (player.movingRight) player.x += 5;
  if (player.movingUp) player.y -= 5;
  if (player.movingDown) player.y += 5;
}
