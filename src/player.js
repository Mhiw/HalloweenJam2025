class Player extends Entity {
	constructor(x, y) {
		super(x, y);
		this.collider = new Collider(x, y, 16, 16, function() {
			console.log("Collision");
		});
	}

	update() {
		this.collider.x = this.x;
		this.collider.y = this.y;

		this.collider.checkCollision();
		this.move();
		this.draw();
	}
}
