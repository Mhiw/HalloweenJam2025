class Healthbar {
	constructor(max, onKill) {
		this.current = max;
		this.max = max;
		this.onKill = onKill;
	}

	damage(value) {
		this.current -= value;
		if(this.current <= 0) {
			this.current = 0;
			this.onKill();
		}
	}

	fill() {
		this.current = this.max;
	}

	draw(originX, originY, width, height) {
		fill(color(255, 0, 0));
		rect(originX - width / 2, originY, width, height);
		fill(color(0, 255, 0));
		rect(originX - width / 2, originY, width * (this.current / this.max), height);
	}

	drawAsPlayer() {
		imageMode(CORNER);
		const w = healthbarImgs[this.current].width * SCALE;
		const h = healthbarImgs[this.current].height * SCALE;
		image(healthbarImgs[this.current], 0, 0, w, h);
	}
}
