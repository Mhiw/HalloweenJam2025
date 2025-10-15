class Bullet extends Entity {
	constructor(x, y, dx, dy, img) {
		super(x, y);
		this.img = img;
		this.velocity = new Velocity(dx, dy);
		this.speed = 0.5;
		this.collider = new Collider(x, y, 16, 8, "Bullet", (tag) => {
			if(tag === "Static") {
				this.collider.disabled = true;
				this.x -= this.velocity.dx * (this.collider.w + 1);
				this.y -= this.velocity.dy * (this.collider.h + 1);
				this.velocity.dx *= -1;
				this.velocity.dy *= -1;
			}
		});
	}

	update() {
		this.collider.disabled = false;

		this.collider.x = this.x;
		this.collider.y = this.y;

		this.move();
		
		const w = this.img.width * 2;
		const h = this.img.height * 2;

		let angle = atan2(this.velocity.dy, this.velocity.dx);

		push();
		
		translate(this.x, this.y);
		imageMode(CENTER);
		rotate(angle);
		translate(-this.x, -this.y);
		image(this.img, this.x, this.y, w, h);
		
		pop();
	}

	move() {
		this.x += this.velocity.dx * this.speed * deltaTime;
		this.y += this.velocity.dy * this.speed * deltaTime;
	}
}
