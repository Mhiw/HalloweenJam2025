class Enemy extends Entity {
	constructor(x, y) {
		super(x, y);
		this.healthbar = new Healthbar(100, () => {
			console.log("Dead! :(");
		});
		this.collider = new Collider(x, y, 16, 16, ["Enemy"], (tags) => {
			if(tags[0] === "Bullet") {
				this.healthbar.damage(10);
			}
		});
	}

	update() {
		this.collider.x = this.x;
		this.collider.y = this.y;
		
		fill(color(255, 0, 0))
		this.draw();
	}
}
