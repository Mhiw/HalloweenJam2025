let entities = [
	new Player(0, 0),
];

let walls = [
	new Collider(-16, 0, 16, 400, null),
	new Collider(400, 0, 16, 400, null),
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
	entities.push(new Bullet(player.x + 32, player.y, 1, 0));
}
