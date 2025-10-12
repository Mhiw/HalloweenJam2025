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
	entities.push(player);
}

function spawnEnemies(count) {
	for(let i = 0; i < count; i++) {
		entities.push(new Enemy(Math.random() * 400, Math.random() * 400));
	}
}

function draw() {
	background(220);
	scale(SCALE)

	for(let i = 0; i < entities.length; i++) {
		entities[i].update();
	}

	player.update();
}

function mouseClicked() {
	let player = entities[0];
	scale(SCALE);
	entities.push(new Bullet(player.x + 16, player.y, 1, 0, bulletImg));
}
