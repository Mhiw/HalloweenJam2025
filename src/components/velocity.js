class Velocity {
	constructor() {
		this.dx = 0;
		this.dy = 0;
	}

	invertVelocity(flipX, flipY) {
		if(flipX) { this.dx *= -1; }
		if(flipY) { this.dy *= -1; }
	}
}
