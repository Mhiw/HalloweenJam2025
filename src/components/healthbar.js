class Healthbar {
	constructor(max, onKill) {
		this.current = max;
		this.max = max;
		this.onKill = onKill;
	}

	damage(value) {
		this.current -= value;
		if(value <= 0) {
			this.onKill();
		}
	}
}
