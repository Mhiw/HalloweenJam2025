class Bullet extends Entity {
	constructor(x, y, dx, dy) {
		super(x, y);
		this.collider = new Collider(x, y, 16, 16, "Bullet", function() {
			//console.log("Collision");
		});
		this.velocity = new Velocity(dx, dy);
		this.speed = 0.1;
	}

	update() {
		this.collider.x = this.x;
		this.collider.y = this.y;


		if(this.collider.checkCollision(["Enemy", "Player", "Static"]) === true) {
			this.velocity.invertVelocity(true, true);
			//console.log(this.x, this.y);
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
