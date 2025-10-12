class Velocity {
	constructor(dx, dy) {
		this.dx = dx;
		this.dy = dy;
	}

	invertVelocity(flipX, flipY) {
		if(flipX) { this.dx *= -1; }
		if(flipY) { this.dy *= -1; }
	}
}
