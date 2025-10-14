let entities = [];
let player;

let walls = [
	new Collider(-16, 0, 16, 400, "Static", null),
	new Collider(400, 0, 16, 400, "Static", null),
]

function setup() {
	createCanvas(640*SCALE, 360*SCALE);
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
	background(39, 24, 84);
	scale(SCALE)

	for(let i = 0; i < entities.length; i++) {
		entities[i].update();
	}

	push();
	applyCameraShake();

	// Temporärt, ville mest bara kolla om camera shaken faktiskt fungerade, vi kanske inte äns ska ha kvar den lol. 
	stroke(80);
	for (let x = 0; x < width / SCALE; x += 16) {
		line(x, 0, x, height / SCALE);
	}
	for (let y = 0; y < height / SCALE; y += 16) {
		line(0, y, width / SCALE, y);
	}
	
	player.update();
	gun.followPlayer(player.x + 10, player.y + 10);
	gun.update();

	pop();
}

function mouseClicked() {
	startCameraShake(200, 3);
	let player = entities[0];
	scale(SCALE);
	
	let dx = mouseX - player.x;
	let dy = mouseY - player.x;
	let angle = Math.atan2(dy, dx);
	entities.push(new Bullet(player.x, player.y, cos(angle), sin(angle), bulletImg));
}
