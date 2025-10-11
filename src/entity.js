class Entity {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.dx = 0;
		this.dy = 0;
		this.speed = 100;
	}

	update() {
		this.move();
		this.draw();
	}

	draw() {
		rect(this.x, this.y, 16, 16);
	}

	move() {
		this.x += this.dx * this.speed * deltaTime;
		this.y += this.dy * this.speed * deltaTime;
		this.dx = 0;
		this.dy = 0;
	}

	velocity(dx, dy) {
		this.dx = dx;
		this.dy = dy;
	}
}
