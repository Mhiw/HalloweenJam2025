let walls = [
	new Collider(-16, 0, 16, HEIGHT, ["Static", "Vertical"], null),
	new Collider(WIDTH - 16, 0, 16, HEIGHT, ["Static", "Vertical"], null),
	new Collider(0, -16, WIDTH, 16, ["Static", "Horizontal"], null),
	new Collider(0, HEIGHT, WIDTH, 16, ["Static", "Horizontal"], null),
]

function spawnEnemies(count) {
	for(let i = 0; i < count; i++) {
		enemies.push(new Enemy(Math.random() * 400, Math.random() * 400));
	}
}

function setup() {
	createCanvas(WIDTH*SCALE, HEIGHT*SCALE);
	noSmooth();
	preloadAssets();

	player = new Player(WIDTH/2, HEIGHT/2, playerImg);
	gun = new Gun(player.x+10, player.y+10, gunImg);

	spawnEnemies(5);
}

function draw() {
	background(0);
	scale(SCALE)

	push();
	applyCameraShake();

	drawTiles();

	updateBullets();
	updateEnemies();
	
	updateColliders();
	
	player.update();
	gun.followPlayer(player.x + 10, player.y + 10);
	gun.update();
	drawCursor();

	pop();

}

function mouseClicked() {
	scale(SCALE);
	
	let dx = mouseX / SCALE - player.x;
	let dy = mouseY / SCALE - player.y;

	let angle = Math.atan2(dy, dx);

	player.velocity.dx = -cos(angle);
	player.velocity.dy = -sin(angle);

	const barrelX = gun.x + Math.cos(angle) * gun.barrelLength;
	const barrelY = gun.y + Math.sin(angle) * gun.barrelLength;

	bullets.push(new Bullet(barrelX, barrelY, cos(angle), sin(angle), bulletImg));

	shootSound.setVolume(0.2);
	shootSound.rate(random(0.8, 1.2));
	shootSound.play();
}

function drawCursor() {
  imageMode(CENTER);
  image(cursorImg, mouseX / SCALE, mouseY / SCALE, cursorImg.width * SCALE, cursorImg.height * SCALE);
  noCursor();
}
