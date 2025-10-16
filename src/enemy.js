let enemies = [];

function updateEnemies() {
	for(let i = 0; i < enemies.length; i++) {
		enemies[i].update();
	}
}

class Enemy extends Entity {
	constructor(x, y, img) {
		super(x, y);
		this.img = img;
		this.speed = 0.05;
		this.healthbar = new Healthbar(100, () => {
			const index = enemies.indexOf(this);
			if(index > -1) {
				enemies.splice(index, 1);
				this.collider.remove();
			}
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

		this.move();
		
		imageMode(CENTER);
		image(shadowImg, this.x, this.y, 24*SCALE, 24*SCALE);
		const w = this.img.width * SCALE;
		const h = this.img.height * SCALE;
		image(this.img, this.x, this.y, w, h);

		this.draw();

		this.healthbar.draw(this.x + this.collider.w / 2, this.y + 20, 40, 5);
	}

	move() {
		let dx = player.x - this.x;
		let dy = player.y - this.y;

		let angle = Math.atan2(dy, dx);

		this.x += cos(angle) * this.speed * deltaTime;
		this.y += sin(angle) * this.speed * deltaTime;
	}
}
