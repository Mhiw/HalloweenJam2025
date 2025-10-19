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

let mapWidth;
let mapHeight;
let offsetX;
let offsetY;

let tagList = [
    "",
    "Horizontal",
    "Horizontal",
    "Vertical",
    "Vertical",
]

function updateConstants() {
    mapWidth = tileMap[0].length * TILE_SIZE * SCALE;
    mapHeight = tileMap.length * TILE_SIZE * SCALE;
    offsetX = (WIDTH - mapWidth) / 2;
    offsetY = (HEIGHT - mapHeight) / 2;
}

function loadLevel(level) {
    tileMap = level;

    updateConstants();

    for (let y = 0; y < tileMap.length; y++) {
      	for (let x = 0; x < tileMap[y].length; x++) {
        	if(tileMap[y][x] > 0) {
                let tag = tagList[tileMap[y][x]];
          		colliders.push(new Collider(x * TILE_SIZE * SCALE + offsetX, y * TILE_SIZE * SCALE + offsetY, TILE_SIZE * SCALE, TILE_SIZE * SCALE, ["Static", tag], (tags) => {
                    
    			}));
        	}
    	}
    }

    // Denna funktion kan man då använda när ex. alla fiender är döda och man ska till nästa level. 
}

function drawTiles() {
    updateConstants();
    
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


