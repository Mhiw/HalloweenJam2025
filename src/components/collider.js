let colliders = [];

class Collider {
	constructor(x, y, w, h, tags, onCollision) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.tags = tags;
		this.disabled = false;
		this.onCollision = onCollision;

		colliders.push(this);
	}

	remove() {
		const index = colliders.indexOf(this);
		if(index > -1) {
			colliders.splice(index, 1);
		}
	}
}

function updateColliders() {
	for(let i = 0; i < colliders.length; i++) {
		for(let j = 0; j < colliders.length; j++) {
			if(i >= colliders.length | j >= colliders.length || i === j || colliders[i].disabled | colliders[j].disabled) {
				continue;
			}

			let a = colliders[i];
			let b = colliders[j];

			if(a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h) {
				if(a.onCollision !== null) {
					a.onCollision(b.tags);
				}
				if(b.onCollision !== null) {
					b.onCollision(a.tags);
				}
			}
		}
	}
}
