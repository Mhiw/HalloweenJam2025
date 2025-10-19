class Entity {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.dx = 0;
		this.dy = 0;
		this.speed = 1;
	}

	update() {
		this.move();
		this.draw();
	}

	draw() {
		
	}

	move() {
		this.x += this.dx * this.speed * deltaTime;
		this.y += this.dy * this.speed * deltaTime;
	}

	velocity(dx, dy) {
		this.dx = dx;
		this.dy = dy;
	}
}
