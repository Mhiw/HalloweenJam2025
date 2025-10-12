class Bullet extends Entity {
	constructor(x, y, dx, dy) {
		super(x, y);
		this.collider = new Collider(x, y, 16, 16, "Bullet", function() {

		});
		this.velocity = new Velocity(dx, dy);
		this.speed = 0.1;
	}

	update() {
		this.collider.x = this.x;
		this.collider.y = this.y;


		if(this.collider.checkCollision(["Enemy", "Player", "Static"]) === true) {
			this.x += this.velocity.dx * -1;
			this.y += this.velocity.dy * -1;
			this.velocity.invertVelocity(true, true);
		}
		
		this.move();
		
		fill(color(0, 255, 0))
		this.draw();
	}

	move() {
		this.x += this.velocity.dx * this.speed * deltaTime;
		this.y += this.velocity.dy * this.speed * deltaTime;
	}
}
