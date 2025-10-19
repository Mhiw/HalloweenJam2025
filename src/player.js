let player;

class Player extends Entity {
	constructor(x, y, img, gunImg) {
		super(x, y);
		this.img = img;
		this.gunImg = gunImg;
		this.speed = 0.2;
		this.velocity = new Velocity(0, 0);
		this.healthbar = new Healthbar(4, () => {
			startCameraShake(50, 3);
			CURRENT_STATE = Gamestate.DEAD;
		});
		this.collider = new Collider(x, y, 16, 16, ["Player"], (tags) => {
			if(tags[0] === "Static") {
				this.collider.disabled = true;
				if(tags[1] === "Vertical") {
					this.x -= this.velocity.dx * this.collider.w * 1.5;
					this.velocity.dx *= -1;
				} else {
					this.y -= this.velocity.dy * this.collider.h * 1.5;
					this.velocity.dy *= -1;
				}

				bounceSound.setVolume(0.2);
				bounceSound.rate(random(0.8, 1.2));
				bounceSound.play();
				startCameraShake(100, 3);
			}
			if(tags[0] === "Enemy" || tags[0] === "Bullet") {
				this.healthbar.damage(1);
				
			}
		});
	}

	update() {
		this.collider.disabled = false;
		
		this.collider.x = this.x;
		this.collider.y = this.y;

		this.move();

		imageMode(CENTER);
		const w = this.img.width * SCALE;
		const h = this.img.height * SCALE;
		image(this.img, this.x, this.y, w, h);

		image(shadowImg, this.x, this.y + 10, 24*SCALE, 24*SCALE);

		this.healthbar.drawAsPlayer();
	}

	move() {
		this.x += this.velocity.dx * this.speed * deltaTime;
		this.y += this.velocity.dy * this.speed * deltaTime;

		const friction = 0.97;
		this.velocity.dx *= friction;
		this.velocity.dy *= friction;

		if (abs(this.velocity.dx) < 0.01) this.velocity.dx = 0;
 		if (abs(this.velocity.dy) < 0.01) this.velocity.dy = 0;
	}
}
