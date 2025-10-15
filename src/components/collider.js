let colliders = [];

class Collider {
	constructor(x, y, w, h, tag, onCollision) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.tag = tag;
		this.onCollision = onCollision;
		this.disabled = false;

		colliders.push(this);
	}
}

function updateColliders() {
	for(let i = 0; i < colliders.length; i++) {
		for(let j = 0; j < colliders.length; j++) {
			if(i === j || colliders[i].disabled | colliders[j].disabled) {
				continue;
			}

			let a = colliders[i];
			let b = colliders[j];

			if(a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h) {
				if(a.onCollision !== null) {
					a.onCollision(b.tag);
				}
				if(b.onCollision !== null) {
					b.onCollision(a.tag);
				}
			}
		}
	}
}
