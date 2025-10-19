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

	draw() {
		imageMode(CORNER);
		const w = healthbarImgs[this.current].width * SCALE;
		const h = healthbarImgs[this.current].height * SCALE;
		image(healthbarImgs[this.current], 0, 0, w, h);
	}
}
