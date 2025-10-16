class Gun {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.offsetX = 4;
    this.offsetY = -2;

    this.barrelLength = 10;
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
