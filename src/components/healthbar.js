class Healthbar {
	constructor(max, onKill) {
		this.current = max;
		this.max = max;
		this.onKill = onKill;
	}

	damage(value) {
		this.current -= value;
		if(this.current <= 0) {
			this.onKill();
		}
	}

	draw(originX, originY, width, height) {
		fill(color(255, 0, 0));
		rect(originX - width / 2, originY, width, height);
		fill(color(0, 255, 0));
		rect(originX - width / 2, originY, width * (this.current / this.max), height);
	}
}
