let colliders = [];

class Collider {
	constructor(x, y, w, h, tag, onCollision) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.tag = tag;
		this.onCollision = onCollision;

		colliders.push(this);
	}

	checkCollision(tag) {
		for(let i = 0; i < colliders.length; i++) {
			let collider = colliders[i];
			
			let foundTag = false;
			for(let j = 0; j < tag.length; j++) {
				if(tag[i] == collider.tag || tag[i] === "*") {
					foundTag = true;
				}
			}
			
			if(foundTag === true && this !== collider) {
				if(this.x + this.w >= collider.x
					&& this.x <= collider.x + collider.w
					&& this.y + this.h >= collider.y
					&& this.y <= collider.y + collider.h) {
					if(this.onCollision !== null) {
						this.onCollision();
					}
					if(collider.onCollision !== null) {
						collider.onCollision();
					}

					return true;
				}
			}
		}
	}
}
