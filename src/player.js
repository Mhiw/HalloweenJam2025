class Player extends Entity {
	constructor(x, y) {
		super(x, y);
		this.collider = new Collider(x, y, 16, 16, "Player", function() {
			console.log("Collision");
		});
	}

	update() {
		this.collider.x = this.x;
		this.collider.y = this.y;

		if(this.collider.checkCollision("*") !== true) {
			this.move();
		}
		
		fill(color(255, 255, 255))
		this.draw();
	}
}
