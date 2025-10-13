class Bullet extends Entity {
	constructor(x, y, dx, dy, img) {
		super(x, y);
		this.img = img
		this.collider = new Collider(x, y, 16, 8, "Bullet", function() {
			console.log("Collision");
		});
		this.velocity = new Velocity(dx, dy);
		this.speed = 1;
	}

	update() {
		this.collider.x = this.x;
		this.collider.y = this.y;

		this.move();

		if(this.collider.checkCollision(["Static"]) === true) {
			this.velocity.invertVelocity(true, true);
		}
		
		imageMode(CENTER);

		const w = this.img.width * 2;
		const h = this.img.height * 2;

		image(this.img, this.x, this.y, w, h);
	}

	move() {
		this.x += this.velocity.dx * this.speed * deltaTime;
		this.y += this.velocity.dy * this.speed * deltaTime;
		console.log(this.velocity.dx);
	}
}
