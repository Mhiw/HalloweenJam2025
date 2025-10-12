let colliders = [];

class Collider {
	constructor(x, y, w, h, onCollision) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.onCollision = onCollision;

		colliders.push(this);
	}

	checkCollision() {
		for(let i = 0; i < colliders.length; i++) {
			let collider = colliders[i];
			if(collider !== this) {
				if(this.x + this.w > collider.x
					&& this.x < collider.x + collider.w
					&& this.y + this.h > collider.y
					&& this.y < collider.y + collider.h) {
					this.onCollision();
					collider.onCollision();

					return true;
				}
			}
		}
	}
}
