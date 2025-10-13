class Player extends Entity {
	constructor(x, y, img, gunImg) {
		super(x, y);
		this.img = img;
		this.gunImg = gunImg;

		this.collider = new Collider(x, y, 16, 16, "Player", function() {
			console.log("Collision");
		});
	}

		update() {
		this.collider.x = this.x;
		this.collider.y = this.y;

		if(this.collider.checkCollision() !== true) {
			this.move();
		}

		imageMode(CENTER);
		const w = this.img.width * SCALE;
		const h = this.img.height * SCALE;
		image(this.img, this.x, this.y, w, h);
	}
}


class Gun {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  followPlayer(px, py) {
    this.x = px + this.offsetX;
    this.y = py + this.offsetY;
  }

  update() {
    const mx = mouseX / SCALE;
    const my = mouseY / SCALE;

    let a = atan2(my - this.y, mx - this.x);

    push();
    translate(this.x, this.y);

	let flip = false;
	if (abs(degrees(a)) > 90) {
		flip = true;
	}

	if (flip) {
		scale(1, -1);
		rotate(-a);
	}
	
	else {
		rotate(a)
	}

    imageMode(CENTER);
    const w = this.img.width * SCALE;
    const h = this.img.height * SCALE;

    image(this.img, 0, 0, w, h);
    pop();
  }
}
