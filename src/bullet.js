let bullets = [];

function updateBullets() {
	for(let i = 0; i < bullets.length; i++) {
		bullets[i].update();
	}
}

class Bullet extends Entity {
	constructor(x, y, dx, dy, img) {
		super(x, y);
		this.img = img;
		this.velocity = new Velocity(dx, dy);
		this.speed = 0.2;
		this.collider = new Collider(x, y, 16, 8, ["Bullet"], (tags) => {
			if(tags[0] === "Static") {
				this.collider.disabled = true;
				if(tags[1] === "Vertical") {
					this.x -= this.velocity.dx * this.collider.w * 2;
					this.velocity.dx *= -1;
				} else {
					this.y -= this.velocity.dy * this.collider.h * 2;
					this.velocity.dy *= -1;
				}

				bounceSound.setVolume(0.2);
				bounceSound.rate(random(0.8, 1.2));
				bounceSound.play();
				startCameraShake(50, 3);
			}
			if(tags[0] === "Enemy") {
				const index = bullets.indexOf(this);
				if(index > -1) {
					bullets.splice(index, 1);
					this.collider.remove();
				}
				startCameraShake(10, 3);
				hitSound.setVolume(0.2);
				hitSound.rate(random(0.8, 1.2));
				hitSound.play();
			}
		});

		shootSound.setVolume(0.2);
		shootSound.rate(random(0.8, 1.2));
		shootSound.play();
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
