
const level1 = [
  [5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
  [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8],
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
    const mapWidth = tileMap[0].length * TILE_SIZE * SCALE;
    const mapHeight = tileMap.length * TILE_SIZE * SCALE;

    const offsetX = (width/SCALE - mapWidth) / 2;
    const offsetY = (height/SCALE - mapHeight) / 2;

    for (let y = 0; y < tileMap.length; y++) {
        for (let x = 0; x < tileMap[y].length; x++) {
            const tile = tileMap[y][x];
            const img = tileImgs[tile];

            if (img) {
                imageMode(CORNER);
                image(
                    img,
                    offsetX + x * TILE_SIZE * SCALE,
                    offsetY + y * TILE_SIZE * SCALE,
                    TILE_SIZE * SCALE,
                    TILE_SIZE * SCALE
                );
            }
        }
    }
}


