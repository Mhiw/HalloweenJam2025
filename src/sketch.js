let entities = [
	new Player(0, 0),
];

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
	
}
