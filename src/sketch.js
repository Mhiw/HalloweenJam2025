function spawnEnemies(count) {
	for(let i = 0; i < count; i++) {
		enemies.push(new Enemy(Math.random() * 400, Math.random() * 400, enemyImg));
	}
}

function setup() {
	CURRENT_STATE = Gamestate.ALIVE;

	createCanvas(WIDTH*SCALE, HEIGHT*SCALE);

	noSmooth();

	loadLevel(level1);

	preloadAssets();

	player = new Player(WIDTH/2, HEIGHT/2, playerImg);
	gun = new Gun(player.x+10, player.y+10, gunImg);

	spawnEnemies(5);
}

function draw() {
	background(0);
	scale(SCALE)
	//translate(-WIDTH / 2, -HEIGHT / 2);

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

	drawCursor();
	
	pop();
}

function mouseClicked() {
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
