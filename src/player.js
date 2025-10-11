class Player extends Entity {
	constructor(x, y) {
		super(x, y);
	}

	update() {
		if(keyIsDown(LEFT_ARROW)) { this.velocity(-1, 0) }
		if(keyIsDown(RIGHT_ARROW)) { this.velocity(1, 0) }
		if(keyIsDown(UP_ARROW)) { this.velocity(0, -1) }
		if(keyIsDown(DOWN_ARROW)) { this.velocity(0, 1) }
	}
}
