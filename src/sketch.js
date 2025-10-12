let entities = [
	new Player(0, 0),
	new Player(16, 2),
];

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);

	for(let i = 0; i < entities.length; i++) {
		entities[i].update();
	}
}

function mouseClicked() {
	
}
