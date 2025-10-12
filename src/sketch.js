let entities = [
	new Player(200, 200),
];

let walls = [
	new Collider(-16, 0, 16, 400, "Static", null),
	new Collider(400, 0, 16, 400, "Static", null),
]

function setup() {
	createCanvas(400, 400);
}

function spawnEnemies(count) {
	for(let i = 0; i < count; i++) {
		entities.push(new Enemy(Math.random() * 400, Math.random() * 400));
	}
}

function draw() {
	background(220);

	for(let i = 0; i < entities.length; i++) {
		entities[i].update();
	}
}

function mouseClicked() {
	let player = entities[0];
	let dx = mouseX - player.x;
	let dy = mouseY - player.x;
	let angle = Math.atan2(dy, dx);
	entities.push(new Bullet(player.x, player.y, cos(angle), sin(angle)));
}
