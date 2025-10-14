class Enemy extends Entity {
	constructor(x, y) {
		super(x, y);
		this.collider = new Collider(x, y, 16, 16, "Enemy", function(tag) {
			//console.log("Collision");
		});
		this.healthbar = new Healthbar(100, function() {
			console.log("Dead! :(");
		});
	}

	update() {
		this.collider.x = this.x;
		this.collider.y = this.y;

		if(this.collider.checkCollision(["Player", "Static", "Bullet"]) !== true) {
			this.move();
		}
		
		fill(color(255, 0, 0))
		this.draw();
	}
}
