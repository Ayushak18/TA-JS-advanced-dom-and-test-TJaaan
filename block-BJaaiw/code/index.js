let canvas = document.getElementById('myCanvas');
let c = canvas.getContext('2d');

let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

function drawBall() {
  c.beginPath();
  c.arc(x, y, 20, 0, Math.PI * 2, false);
  c.fillStyle = 'green';
  c.fill();
  c.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  x = x + dx;
  y = y + dy;
}

function animation() {
  requestAnimationFrame(animation);
  draw();
}

animation();
