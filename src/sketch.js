let entities = [];
let player;

let walls = [
	new Collider(-16, 0, 16, HEIGHT, "Static", null),
	new Collider(WIDTH - 16, 0, 16, HEIGHT, "Static", null),
	new Collider(0, -16, WIDTH, 16, "Static", null),
	new Collider(0, HEIGHT, WIDTH, 16, "Static", null),
]

function setup() {
	createCanvas(WIDTH*SCALE, HEIGHT*SCALE);
	noSmooth();
	preloadAssets();

	player = new Player(50, 50, playerImg);
	gun = new Gun(player.x+10, player.y+10, gunImg);
	entities.push(player);
}

function spawnEnemies(count) {
	for(let i = 0; i < count; i++) {
		entities.push(new Enemy(Math.random() * 400, Math.random() * 400));
	}
}

function draw() {
	background(0);
	scale(SCALE)

	push();
	applyCameraShake();

	drawTiles();

	for(let i = 0; i < entities.length; i++) {
		entities[i].update();
	}
	
	updateColliders();
	
	player.update();
	gun.followPlayer(player.x + 10, player.y + 10);
	gun.update();
	drawCursor();

	pop();
}

function mouseClicked() {
	startCameraShake(200, 3);
	let player = entities[0];
	scale(SCALE);
	
	let dx = mouseX / SCALE - player.x;
	let dy = mouseY / SCALE - player.y;

	let angle = Math.atan2(dy, dx);

	entities.push(new Bullet(player.x, player.y, cos(angle), sin(angle), bulletImg));
}

function drawCursor() {
  imageMode(CENTER);
  image(cursorImg, mouseX / SCALE, mouseY / SCALE, cursorImg.width * SCALE, cursorImg.height * SCALE);
  noCursor();
}
