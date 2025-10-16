
const level1 = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];


let tileMap = level1;

function loadLevel(level) {
    tileMap = level;

    for (let y = 0; y < tileMap.length; y++) {
      	for (let x = 0; x < tileMap[y].length; x++) {
        	if(tileMap[y][x] > 0) {
          		colliders.push(new Collider(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE, ["Static"], (tags) => {
                
    			}));
        	}
    	}
    }

    // Denna funktion kan man då använda när ex. alla fiender är döda och man ska till nästa level. 
}

function drawTiles() {
    for (let y = 0; y < tileMap.length; y++) {
        for (let x = 0; x < tileMap[y].length; x++) {
            const tile = tileMap[y][x];
            const img = tileImgs[tile];

            if (img) {
                imageMode(CORNER);
                image(
                    img,
                    x * TILE_SIZE * SCALE,
                    y * TILE_SIZE * SCALE,
                    TILE_SIZE * SCALE,
                    TILE_SIZE * SCALE
                );
            }
        }
    }
}


