let enemies = [];

function updateEnemies() {
	for(let i = 0; i < enemies.length; i++) {
		enemies[i].update();
	}
}

class Enemy extends Entity {
	constructor(x, y) {
		super(x, y);
		this.speed = 0.05;
		this.healthbar = new Healthbar(100, () => {
			const index = enemies.indexOf(this);
			if(index > -1) {
				enemies.splice(index, 1);
			}
			console.log("Dead! :(");
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
		
		fill(color(255, 0, 0))
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
