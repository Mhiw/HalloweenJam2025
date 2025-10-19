const startButton = {
  x: WIDTH / 2 - 50,
  y: HEIGHT / 2 - 25,
  w: 64 * SCALE,
  h: 32 * SCALE
};

const quitButton = {
  x: WIDTH / 2 - 50,
  y: HEIGHT / 2 + 40,
  w: 64 * SCALE,
  h: 32 * SCALE
};

function restart() {
	enemies = [];
	bullets = [];
	colliders = [];
	loadLevel(level1);
	player = new Player(WIDTH/2, HEIGHT/2, playerImg);
	gun = new Gun(player.x+10, player.y+10, gunImg);
	spawnEnemies(5);
}

function spawnEnemies(count) {
	for(let i = 0; i < count; i++) {
		enemies.push(new Enemy(Math.random() * 400, Math.random() * 400, enemyImg));
	}
}

function setup() {
	createCanvas(WIDTH*SCALE, HEIGHT*SCALE);

	noSmooth();

	preloadAssets();

}

function draw() {
	background(0);
	scale(SCALE)

	push();
	drawTiles();
	applyCameraShake();

	if(CURRENT_STATE === Gamestate.ALIVE) {
		updateBullets();
		updateEnemies();
		updateColliders();
		player.update();
		gun.followPlayer(player.x + 10, player.y + 10);
		gun.update();
	}

	if(CURRENT_STATE === Gamestate.DEAD) {
		imageMode(CENTER);

		image(startImg, startButton.x + startButton.w / 2, startButton.y + startButton.h / 2, startButton.w, startButton.h);
		image(quitImg, quitButton.x + quitButton.w / 2, quitButton.y + quitButton.h / 2, quitButton.w, quitButton.h);
	}

	drawCursor();
	
	pop();
}

function mouseClicked() {

	if (CURRENT_STATE === Gamestate.DEAD) {
		
		const mx = mouseX / SCALE;
		const my = mouseY / SCALE;
		
		if (mx > startButton.x && mx < startButton.x + startButton.w && my > startButton.y && my < startButton.y + startButton.h) {
			console.log("START clicked!");
			restart();
			CURRENT_STATE = Gamestate.ALIVE;
		}

		if (mx > quitButton.x && mx < quitButton.x + quitButton.w && my > quitButton.y && my < quitButton.y + quitButton.h) {
			console.log("QUIT clicked!");
			window.close();
		}
	}

	if(CURRENT_STATE === Gamestate.ALIVE) {
		scale(SCALE);
		
		let dx = mouseX / SCALE - player.x;
		let dy = mouseY / SCALE - player.y;

		let angle = Math.atan2(dy, dx);

		player.velocity.dx = -cos(angle);
		player.velocity.dy = -sin(angle);

		const barrelX = gun.x + Math.cos(angle) * gun.barrelLength;
		const barrelY = gun.y + Math.sin(angle) * gun.barrelLength;

		bullets.push(new Bullet(barrelX + cos(angle), barrelY + sin(angle), cos(angle), sin(angle), bulletImg));
	}
}

function drawCursor() {
  imageMode(CENTER);
  image(cursorImg, mouseX / SCALE, mouseY / SCALE, cursorImg.width * SCALE, cursorImg.height * SCALE);
  noCursor();
}

