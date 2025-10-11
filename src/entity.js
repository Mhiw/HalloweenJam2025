class Entity {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	update() {

	}

	draw() {
		rect(this.x, this.y, 16, 16);
	}
}
